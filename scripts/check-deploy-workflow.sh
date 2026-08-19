#!/usr/bin/env bash
set -euo pipefail

workflow=".github/workflows/deploy-static.yml"

if [ ! -f "${workflow}" ]; then
  echo "Missing workflow file: ${workflow}" >&2
  exit 1
fi

first_match_line() {
  local regex="$1"
  grep -nE -m1 -- "${regex}" "${workflow}" | cut -d: -f1 || true
}

require_match() {
  local regex="$1"
  local description="$2"
  if [ -z "$(first_match_line "${regex}")" ]; then
    echo "Missing deploy guardrail: ${description}" >&2
    missing=1
  fi
}

require_order() {
  local description="$1"
  shift
  local previous=0

  for entry in "$@"; do
    local regex="${entry%%::*}"
    local label="${entry#*::}"
    local line

    line="$(first_match_line "${regex}")"
    if [ -z "${line}" ]; then
      echo "Missing deploy guardrail: ${label}" >&2
      missing=1
      return
    fi

    if [ "${line}" -le "${previous}" ]; then
      echo "Deploy workflow ordering failed: ${description}" >&2
      echo "Expected ${label} to appear after the previous step." >&2
      missing=1
      return
    fi

    previous="${line}"
  done
}

forbidden_line() {
  local regex="$1"
  local description="$2"
  if grep -nE -q -- "${regex}" "${workflow}"; then
    echo "Forbidden deploy content found: ${description}" >&2
    forbidden=1
  fi
}

missing=0
forbidden=0

require_match 'branches:[[:space:]]*$' "main branch trigger section present"
require_match '^[[:space:]]*-[[:space:]]*main[[:space:]]*$' "deploy trigger pinned to main"
require_match 'workflow_dispatch:[[:space:]]*$' "manual deploy trigger available"
require_match 'NEXT_PUBLIC_DEPLOY_SHA:[[:space:]]*\$\{\{[[:space:]]*github\.sha[[:space:]]*\}\}' "build receives deploy SHA"
require_match 'run:[[:space:]]*npm run check:deploy-artifacts[[:space:]]+--[[:space:]]+--sha[[:space:]]+"\$\{GITHUB_SHA\}"' "artifact validation uses GITHUB_SHA explicitly"
require_match 'DEPLOY_BRANCH="hostinger-static"' "deploy branch pinned to hostinger-static"
require_match 'Source commit being deployed:' "source SHA is logged during publish"
require_match 'test[[:space:]]+-d[[:space:]]+out' "out directory existence check"
require_match 'test[[:space:]]+-f[[:space:]]+out/index\.html' "out/index.html existence check"
require_match 'cp[[:space:]]+-R[[:space:]]+"\$\{GITHUB_WORKSPACE\}/out/\."' "publish copies static out source"
require_match 'cp[[:space:]]+-R[[:space:]]+"\$\{GITHUB_WORKSPACE\}/out/\."[[:space:]]+"\$\{TMP_DIR\}/"' "publish copies static out destination"

require_order \
  "static build before artifact validation" \
  'Build static export::static build step present' \
  'Verify deploy artifacts::artifact validation step present' \
  'Publish out folder to hostinger-static branch::publish step present'

forbidden_line 'FTP_' "FTP environment variables"
forbidden_line 'lftp' "FTP transfer command"
forbidden_line 'mirror --reverse' "FTP mirror command"

if [ "${missing}" -ne 0 ] || [ "${forbidden}" -ne 0 ]; then
  exit 1
fi

echo "Deploy workflow guardrails passed."
