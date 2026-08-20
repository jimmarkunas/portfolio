#!/usr/bin/env bash
set -euo pipefail

workflow=".github/workflows/deploy-static.yml"

if [ ! -f "${workflow}" ]; then
  echo "Missing workflow file: ${workflow}" >&2
  exit 1
fi

missing=0

has_line() {
  local needle="$1"
  if command -v rg >/dev/null 2>&1; then
    rg -q --fixed-strings -- "${needle}" "${workflow}"
    return
  fi
  grep -Fq -- "${needle}" "${workflow}"
}

require_line() {
  local needle="$1"
  local description="$2"
  if ! has_line "${needle}"; then
    echo "Missing deploy guardrail: ${description}" >&2
    missing=1
  fi
}

require_line "concurrency:" "deploy concurrency block present"
require_line "group: hostinger-production" "deploy concurrency pinned to hostinger-production"
require_line "cancel-in-progress: true" "deploy concurrency cancels in-progress runs"
require_line "workflow_dispatch:" "manual deploy trigger available"
require_line "Validate Hostinger deploy secrets" "hostinger secret validation step present"
require_line "Install deploy client" "deploy client installation step present"
require_line "Deploy out folder to Hostinger" "hostinger deploy step present"
require_line "HOSTINGER_HOST:" "Hostinger host secret is referenced"
require_line "HOSTINGER_USERNAME:" "Hostinger username secret is referenced"
require_line "HOSTINGER_PASSWORD:" "Hostinger password secret is referenced"
require_line "HOSTINGER_TARGET_DIR:" "Hostinger target dir secret is referenced"
require_line "HOSTINGER_PORT" "Hostinger port handling is present"
require_line "mirror --reverse --delete --verbose --parallel=4 out/" "FTP mirror deploy command present"

forbidden=0

forbidden_line() {
  local needle="$1"
  local description="$2"
  if has_line "${needle}"; then
    echo "Forbidden deploy content found: ${description}" >&2
    forbidden=1
  fi
}

forbidden_line "hostinger-static" "static publish branch flow"
forbidden_line "check:live-deployment" "live verification step"
forbidden_line "DEPLOY_BRANCH=" "branch publish deploy variables"

if [ "${missing}" -ne 0 ] || [ "${forbidden}" -ne 0 ]; then
  exit 1
fi

echo "Deploy workflow guardrails passed."
