# Option A Hostinger Manual Release Runbook

## Release Status Labels

The only allowed release status labels are:

1. `SOURCE READY`
2. `ARTIFACT PUBLISHED`
3. `HOSTINGER DEPLOYED`
4. `LIVE VERIFIED`

## What Each Label Means

- `SOURCE READY` means the source branch is ready to release.
- `ARTIFACT PUBLISHED` means GitHub Actions finished successfully and published `hostinger-static`.
- `HOSTINGER DEPLOYED` means Jim manually used the Hostinger dashboard Git deploy or pull step.
- `LIVE VERIFIED` means the live `/agents/` HTML passed marker checks after Hostinger deploy and cache clear.

## Required Manual Steps

- GitHub Actions success only means `ARTIFACT PUBLISHED`.
- It does not mean production is live.
- Hostinger dashboard Git deploy is a required manual step.
- Hostinger cache clear is a required manual step.
- `LIVE VERIFIED` is only allowed after live HTML passes marker checks.

## Required Live Markers

- `Download the free toolkit`
- `Star on GitHub`
- `Report adoption`
- `AGENTS-Enterprise-Model-Template-Kit.zip`

## Forbidden Live Markers

- `Run the readiness check`
- `Download the free system`
- `USAII_AGENTS_by_Jim_Markunas_20260817.pdf`

## Release Checklist

1. Commit and push to `main`.
2. Wait for GitHub Action to finish.
3. Run the pre-Hostinger check.
4. Open the Hostinger dashboard.
5. Run the Git deploy or pull.
6. Clear Hostinger cache.
7. Run the post-Hostinger live check.
8. Only then mark `LIVE VERIFIED`.

## AI Guardrails

- No workflow edits unless Jim explicitly says: `APPROVED: pipeline change`.
- No claiming “deployed” after GitHub Actions alone.
- No stale branch diagnosis without `git ls-remote`.
- No artifact check unless build used `NEXT_PUBLIC_DEPLOY_SHA`.
- Stop on auth scope errors, branch mismatch, unknown Hostinger status, or live marker mismatch.
