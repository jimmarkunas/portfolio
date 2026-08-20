#!/usr/bin/env bash
set -euo pipefail

mode="${1:-}"

fail() {
  echo "FAIL: $1" >&2
  exit 1
}

require_marker() {
  local haystack="$1"
  local marker="$2"
  if ! grep -Fq -- "$marker" <<<"$haystack"; then
    return 1
  fi
}

forbid_marker() {
  local haystack="$1"
  local marker="$2"
  if grep -Fq -- "$marker" <<<"$haystack"; then
    return 1
  fi
}

print_header_subset() {
  local headers_file="$1"
  for header in server platform panel x-hcdn-cache-status last-modified etag; do
    local value
    value="$(awk -v key="${header}" 'BEGIN{IGNORECASE=1} $1 == key ":" {sub(/\r$/, "", $0); print substr($0, length(key) + 3)}' "$headers_file" | tail -n 1)"
    if [[ -n "$value" ]]; then
      echo "${header}: ${value}"
    fi
  done
}

if [[ "$mode" != "pre" && "$mode" != "post" ]]; then
  fail "Usage: bash scripts/release-check-hostinger-option-a.sh pre|post"
fi

required_markers=(
  "Download the free toolkit"
  "Star on GitHub"
  "Report adoption"
  "AGENTS-Enterprise-Model-Template-Kit.zip"
)

forbidden_markers=(
  "Run the readiness check"
  "Download the free system"
  "USAII_AGENTS_by_Jim_Markunas_20260817.pdf"
)

if [[ "$mode" == "pre" ]]; then
  echo "ARTIFACT PUBLISHED CHECK"
  git status --short --branch
  git rev-parse HEAD
  git ls-remote origin refs/heads/main
  git ls-remote origin refs/heads/hostinger-static
  git fetch origin hostinger-static:refs/remotes/origin/hostinger-static

  html="$(git show origin/hostinger-static:agents/index.html)"
  missing=0

  for marker in "${required_markers[@]}"; do
    if require_marker "$html" "$marker"; then
      echo "PASS required: $marker"
    else
      echo "FAIL required: $marker"
      missing=1
    fi
  done

  for marker in "${forbidden_markers[@]}"; do
    if forbid_marker "$html" "$marker"; then
      echo "PASS forbidden: $marker"
    else
      echo "FAIL forbidden: $marker"
      missing=1
    fi
  done

  if [[ "$missing" -ne 0 ]]; then
    fail "ARTIFACT PUBLISHED CHECK failed"
  fi

  echo "ARTIFACT PUBLISHED"
  exit 0
fi

echo "LIVE VERIFIED CHECK"
headers_file="/tmp/gpme-agents-live.headers"
html_file="/tmp/gpme-agents-live.html"

curl -sL -D "$headers_file" "https://greatestpmever.com/agents/" -o "$html_file"

html="$(cat "$html_file")"
missing=0

for marker in "${required_markers[@]}"; do
  if require_marker "$html" "$marker"; then
    echo "PASS required: $marker"
  else
    echo "FAIL required: $marker"
    missing=1
  fi
done

for marker in "${forbidden_markers[@]}"; do
  if forbid_marker "$html" "$marker"; then
    echo "PASS forbidden: $marker"
  else
    echo "FAIL forbidden: $marker"
    missing=1
  fi
done

print_header_subset "$headers_file"

if [[ "$missing" -ne 0 ]]; then
  echo "NOT LIVE VERIFIED"
  echo "Missing required markers or present forbidden markers detected."
  echo "Next action: deploy Git in Hostinger dashboard and clear Hostinger cache."
  exit 1
fi

echo "LIVE VERIFIED"
