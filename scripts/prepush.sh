#!/usr/bin/env bash
set -euo pipefail

if [ -n "$(git status --porcelain --untracked-files=all)" ]; then
  echo "Working tree must be clean before prepush." >&2
  git status --short
  exit 1
fi

git diff --check
npm run typecheck

deploy_sha="$(git rev-parse HEAD)"
NEXT_PUBLIC_DEPLOY_SHA="${deploy_sha}" npm run build
npm run check:deploy-artifacts -- --sha "${deploy_sha}"
npm run check:deploy-workflow
