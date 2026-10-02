#!/usr/bin/env bash
set -euo pipefail

limit="${1:-50}"

if ! [[ "$limit" =~ ^[0-9]+$ ]] || [[ "$limit" -lt 1 ]]; then
  echo "Usage: $0 [top-count]" >&2
  exit 2
fi

printf '== Repository object store ==\n'
git count-objects -vH

printf '\n== Current HEAD tracked-file footprint ==\n'
git ls-tree -r -l HEAD \
  | awk '{ if ($4 ~ /^[0-9]+$/) { bytes += $4; files += 1 } } END { printf "tracked files: %d\ntracked bytes: %d (%.2f MiB)\n", files, bytes, bytes/1048576 }'

printf '\n== Current HEAD files >= 500 KiB ==\n'
current_large="$({
  git ls-tree -r -l HEAD \
    | awk '$4 ~ /^[0-9]+$/ && $4 >= 512000 { printf "%12d  %s\n", $4, $5 }' \
    | sort -nr
} || true)"
if [[ -n "$current_large" ]]; then
  printf '%s\n' "$current_large"
else
  echo "none"
fi

printf '\n== Largest historical blobs across all refs (top %s) ==\n' "$limit"
tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT

git rev-list --objects --all \
  | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' \
  | awk '$1 == "blob" { printf "%012d\t%s\t%s\n", $3, $2, substr($0, index($0,$4)) }' \
  | sort -nr \
  | sed -n "1,${limit}p" > "$tmp"

awk -F '\t' '{ printf "%10.2f MiB  %s  %s\n", $1/1048576, $2, $3 }' "$tmp"

printf '\n== Historical blobs >= 1 MiB ==\n'
count="$(awk -F '\t' '$1 >= 1048576 { n += 1 } END { print n + 0 }' "$tmp")"
printf 'shown in top-%s sample: %s\n' "$limit" "$count"

printf '\nNOTE: This script is read-only. It identifies the exact blob SHA/path candidates responsible for clone bloat; it does not rewrite history.\n'
