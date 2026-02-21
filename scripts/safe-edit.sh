#!/usr/bin/env bash
set -euo pipefail

echo "== Git status =="
git status --short
echo

echo "== Current commit =="
git rev-parse --short HEAD
echo

echo "== Recent commits =="
git log --oneline -n 5
echo

echo "== Unmerged/conflict markers check =="
if rg -n "^(<<<<<<<|=======|>>>>>>>)" . --glob "!*.git/*" >/dev/null 2>&1; then
  echo "Conflict markers found. Resolve before continuing."
  exit 1
fi
echo "No conflict markers found."
