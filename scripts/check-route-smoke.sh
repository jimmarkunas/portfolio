#!/usr/bin/env bash
set -euo pipefail

routes=()
while IFS= read -r route; do
  if [ -n "${route}" ]; then
    routes+=("${route}")
  fi
done < <(node scripts/get-route-smoke-routes.mjs)

if [ "${#routes[@]}" -eq 0 ]; then
  echo "Route smoke check failed: no routes generated." >&2
  exit 1
fi

echo "Route smoke report:"
for route in "${routes[@]}"; do
  echo ""
  echo "[route-smoke] ${route}"
  bash scripts/fast-verify-route.sh "$route"
done
