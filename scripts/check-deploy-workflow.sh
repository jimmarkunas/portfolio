#!/usr/bin/env bash
set -euo pipefail

workflow=".github/workflows/deploy.yml"

if [ ! -f "${workflow}" ]; then
  echo "Missing workflow file: ${workflow}" >&2
  exit 1
fi

missing=0

require_line() {
  local needle="$1"
  local description="$2"
  if ! rg -q --fixed-strings "${needle}" "${workflow}"; then
    echo "Missing deploy guardrail: ${description}" >&2
    missing=1
  fi
}

require_line "FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true" "Node 24 JavaScript action runtime pin"
require_line "path: ./out" "artifact download path pinned to ./out"
require_line "merge-multiple: true" "artifact merge mode pinned for out directory layout"
require_line "if [ ! -d \"./out\" ]; then" "artifact existence check before deploy"
require_line "FTP_CONNECT_TIMEOUT_SECONDS: \"45\"" "FTP connect timeout env guardrail"
require_line "FTP_TRANSFER_TIMEOUT_SECONDS: \"300\"" "FTP transfer timeout env guardrail"
require_line "FTP_DEPLOY_ATTEMPTS: \"3\"" "FTP retry-attempt env guardrail"
require_line 'timeout "${FTP_TRANSFER_TIMEOUT_SECONDS}s" lftp -e' "FTP transfer hard timeout wrapper"
require_line 'for attempt in $(seq 1 "${FTP_DEPLOY_ATTEMPTS}"); do' "FTP bounded retry loop"
require_line "mirror --reverse --delete --continue --parallel=4 --verbose ./out/" "parallel incremental mirror deploy command"

if [ "${missing}" -ne 0 ]; then
  exit 1
fi

echo "Deploy workflow guardrails passed."
