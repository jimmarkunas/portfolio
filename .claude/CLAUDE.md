## Claude Code Rules

### Search before reading
- Use Grep to find the exact file and line before opening anything
- Use Glob only to locate files by name pattern
- Never read a full file when you only need one section — use `offset` + `limit`
- Never read a file just to understand structure; grep for the symbol first

### Edit with precision
- Read only the lines you're about to change
- Use Edit, not Write, for existing files
- Make the smallest change that solves the problem — no cleanup, no refactoring bystanders

### No exploratory chains
- One grep → targeted read → edit. Not grep → read → grep → read → read → edit
- If the first grep doesn't find it, refine the pattern — don't start reading files speculatively
- Never spawn an Agent or Explore subagent for a search you could grep in one call

### No verification theater
- Never run a build to confirm correctness — if the edit is right, it's right
- Never run a tag-counting script; read the 5–10 lines around the change instead
- Never start a dev server to check something; use the build output or grep
- If a prior attempt failed, diagnose the root cause before trying again — don't retry variants

### No padding
- No preamble, no summaries, no "here's what I did" at the end
- If a change is obvious from the diff, don't explain it

### Token guardrails
- Respect `.aiignore` and avoid reading ignored files unless explicitly requested
- For logs, default to short reads (`tail -n 40`) instead of full output dumps
