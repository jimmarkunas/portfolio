# Deployment Incident — 2026-08-20

## Permanent deployment contract

This repository is a **Next.js static export** deployment.

The only approved production path is:

`VS Code/main -> GitHub Actions -> out/ -> hostinger-static -> Hostinger manual Deploy -> clear Hostinger cache`

Hostinger Git configuration:

- Repository: `https://github.com/jimmarkunas/portfolio`
- Branch: `hostinger-static`
- Install path: `/`

## Confirmed failure state

The confirmed Hostinger failure was:

`Project directory is not a git repository`

At that point the Hostinger project directory was populated with site files but was not a usable Git checkout. The live site also remained on an older deploy SHA while `main` and `hostinger-static` had newer static artifacts.

The incident was compounded by repeated changes to the previously working deployment architecture, including whole-repository rollback attempts and direct FTP/FTPS deployment experiments. The exact individual operation that removed or invalidated Hostinger's Git metadata was not conclusively proven from the available logs. Therefore **all direct writes, mirrors, deletes, FTP/SFTP/rsync deployments, or AI-driven Hostinger changes to `public_html` are permanently prohibited**.

## Recovery that worked

The site was recovered by clearing the broken `public_html` contents and re-uploading/redeploying so Hostinger could establish a valid deployment state again. A subsequent deployment while `public_html` was already populated also succeeded, proving the deployment path was functional again.

## Rules that must never be violated

1. Never replace the static-branch deployment architecture with direct FTP/SFTP/rsync deployment.
2. Never let an AI coding agent edit `.github/workflows/**`, `next.config.mjs`, deployment verification scripts, or Hostinger deployment configuration.
3. Never repair a deployment problem by rolling the whole repository back to an old application snapshot.
4. Never use new Git branches for this repository. Development happens on `main`; restore points are annotated Git tags.
5. Never force-push or rewrite `main` history.
6. Never directly push to `hostinger-static`; only GitHub Actions publishes that branch.
7. Hostinger deployment remains manual: after GitHub Actions succeeds, click **Deploy** in Hostinger and clear Hostinger cache.
8. If Hostinger ever reports `Project directory is not a git repository`, do not modify application code or CI/CD. Treat it as a Hostinger checkout-state problem.

## Verification commands

Current source SHA:

`git rev-parse HEAD`

Latest CI run:

`gh run list --workflow deploy-static.yml --branch main --limit 1`

Live deployed SHA:

`curl -s https://greatestpmever.com/agents/ | grep -o 'gpme-deploy-sha" content="[a-f0-9]*' | head -1`

The live SHA must match the source SHA after the GitHub Actions publish, Hostinger manual Deploy, and cache clear are complete.
