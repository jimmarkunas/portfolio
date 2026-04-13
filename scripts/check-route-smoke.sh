#!/usr/bin/env bash
set -euo pipefail

routes=(
  "/"
  "/work/"
  "/work/murad/"
  "/interview/"
  "/interviews/"
  "/geekle2026/"
  "/preview/homepage/"
)

echo "Route smoke report:"
for route in "${routes[@]}"; do
  echo ""
  echo "[route-smoke] ${route}"
  bash scripts/fast-verify-route.sh "$route"
done
