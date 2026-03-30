## Claude Rules (Compact)

- Read narrowly: grep/find first, then open only the section you will change.
- Edit minimally: smallest safe diff, no unrelated refactors.
- Validate proportionally: targeted checks first; escalate only as needed.
- Respect `.aiignore`; default logs to short tails (`tail -n 40`).
- Follow `AGENTS.md` as the primary project policy.
