#!/usr/bin/env bash
set -euo pipefail

routes=(
  "/"
  "/work/"
  "/work/murad/"
  "/work/lego/press/01-Harvard-Business-Review/"
  "/services/"
  "/contact/"
  "/cv/"
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
