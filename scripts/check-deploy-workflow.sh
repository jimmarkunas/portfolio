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

require_line "name: Build and Publish Static Site" "publish workflow name is present"
require_line "workflow_dispatch:" "manual deploy trigger available"
require_line 'permissions:' "workflow permissions block present"
require_line 'contents: write' "workflow can write the hostinger-static branch"
require_line 'Build static export' "static build step present"
require_line 'Verify out folder exists' "static output verification present"
require_line 'test -f out/cv/index.html' "cv output verification present"
require_line 'test -f out/work/index.html' "work output verification present"
require_line 'test -f out/agents/index.html' "agents output verification present"
require_line 'Verify deploy artifacts' "deploy artifact verification present"
require_line 'npm run check:deploy-artifacts -- --sha "${GITHUB_SHA}"' "deploy artifact checker is called"
require_line 'Publish out folder to hostinger-static branch' "hostinger-static publish step present"
require_line 'DEPLOY_BRANCH="hostinger-static"' "deploy branch pinned to hostinger-static"
require_line 'git clone --branch "${DEPLOY_BRANCH}"' "hostinger-static branch clone present"
require_line 'git commit -m "Deploy static site from ${SOURCE_SHA}"' "deploy commit message includes source sha"
require_line 'git push origin "${DEPLOY_BRANCH}"' "hostinger-static branch push present"

forbidden=0

forbidden_line() {
  local needle="$1"
  local description="$2"
  if has_line "${needle}"; then
    echo "Forbidden deploy content found: ${description}" >&2
    forbidden=1
  fi
}

forbidden_line "Deploy out folder to Hostinger over SSH" "SSH deploy step"
forbidden_line "rsync -az --delete" "SSH rsync deploy command"
forbidden_line "check:live-deployment" "live verification step"
forbidden_line "FTP_" "FTP deploy variables"
forbidden_line "lftp" "FTP transfer command"
forbidden_line "mirror --reverse" "FTP mirror command"

if [ "${missing}" -ne 0 ] || [ "${forbidden}" -ne 0 ]; then
  exit 1
fi

echo "Deploy workflow guardrails passed."
