#!/usr/bin/env bash
# PostToolUse hook: format, lint and type-check after Claude edits a file.
#
# deno fmt rewrites the file in place. deno lint and deno check cannot fix
# anything themselves, so their output goes to stderr with exit code 2, which
# feeds the errors back to Claude to fix.

set -uo pipefail

root=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
cd "$root" || exit 0

# Nothing to do if Deno is not installed on this machine.
command -v deno >/dev/null 2>&1 || exit 0

file=$(jq -r '.tool_response.filePath // .tool_input.file_path // empty' 2>/dev/null)
case "$file" in
*.ts | *.js | *.json | *.jsonc | *.md | *.css | *.html) ;;
*) exit 0 ;;
esac

deno fmt --quiet >/dev/null 2>&1

if ! output=$(deno lint --quiet 2>&1 && deno check build.ts serve.ts src/main.ts 2>&1); then
  echo "$output" >&2
  exit 2
fi
