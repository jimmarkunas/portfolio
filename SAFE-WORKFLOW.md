# Safe Edit Workflow

Use this sequence for every change request.

## 1) Checkpoint First

```bash
git status --short
git add -A
git commit -m "checkpoint: before <task>"
```

## 2) Make One Scoped Change

- Change only files needed for that one task.
- Do not mix unrelated edits.

## 3) Preflight Check

```bash
./scripts/safe-edit.sh
```

## 4) Visual Verify

- Open only the affected page(s).
- Confirm before doing any broader rollout.

## 5) Rollback If Needed

```bash
git log --oneline -n 10
git reset --hard <checkpoint-hash>
```

## Rules

- No destructive rollback without an explicit commit hash.
- No multi-page rollout until a single-page preview is approved.
- If unrelated files appear in `git status`, stop and ask before continuing.
