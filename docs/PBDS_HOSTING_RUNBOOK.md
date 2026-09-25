# PBDS-HOST — Deterministic Portfolio Deployment Runbook

**Status:** Active proof package  
**Owner:** Jim Markunas  
**Effective:** 2026-09-25  
**Gate:** Required before PBDS-5 Portfolio V2 pilot  
**Scope:** Portfolio production delivery only; this runbook does not authorize PBDS-5 migration.

## 1. Purpose

PBDS-HOST proves one deterministic production path for the portfolio before Portfolio V2 implementation begins.

The canonical production chain is:

```text
local / main source
  → GitHub main
    → GitHub Actions static export
      → hostinger-static deploy branch
        → human Hostinger Deploy
          → human Hostinger cache clear
            → greatestpmever.com public read-back
```

This is the only approved production path.

The `hostinger-static` branch is an automated deploy artifact branch. It is not a development branch and must never be pushed directly by an agent or human as a substitute for the workflow.

## 2. Authority and non-negotiable constraints

Read these before deployment work:

1. `AGENTS.md`
2. `docs/DEPLOYMENT_INCIDENT_2026-08-20.md`
3. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md`
4. this runbook

The August 20 deployment incident permanently locks the deployment architecture.

AI agents must not:

- modify `.github/workflows/**`;
- modify `next.config.mjs`;
- modify deployment verification scripts;
- modify deployment-related `package.json` scripts;
- push directly to `hostinger-static`;
- use FTP, FTPS, SFTP, rsync, `lftp`, or another direct Hostinger file transport;
- change Hostinger repository/branch/install-path/Auto Deployment settings;
- rewrite, reset, rebase, or force-push `main`;
- create an alternate production branch.

If a deployment layer fails, diagnose that layer without redesigning the pipeline.

## 3. Fixed production configuration

### GitHub source

- Repository: `jimmarkunas/portfolio`
- Production source branch: `main`
- Development branch policy: `main` only for this repository

### GitHub Actions

Workflow:

`.github/workflows/deploy-static.yml`

Trigger:

- push to `main`
- manual `workflow_dispatch`

The workflow must:

1. install dependencies;
2. build the Next.js static export with `NEXT_PUBLIC_DEPLOY_SHA=${GITHUB_SHA}`;
3. verify `out/` and required route artifacts;
4. verify route and deploy-SHA markers;
5. publish only `out/` to `hostinger-static`;
6. create the deploy commit as `Deploy static site from <MAIN_SHA>`.

### Hostinger

Permanent Hostinger Git configuration:

- Repository: `https://github.com/jimmarkunas/portfolio`
- Branch: `hostinger-static`
- Install path: `/`
- Production deploy action: human clicks **Deploy**
- After deployment: human clears Hostinger cache

Agents may inspect evidence but may not change this configuration.

## 4. Required proof before PBDS-5

PBDS-HOST passes only when one candidate has all of the following evidence:

1. **Exact GitHub `main` SHA** recorded.
2. **Static publish proof:** `hostinger-static` HEAD is an Actions-authored commit whose message is `Deploy static site from <MAIN_SHA>`.
3. **Hostinger deployment success:** Hostinger shows the deployment completed successfully for the candidate artifacts.
4. **Cache clear completed** after the successful Hostinger deploy.
5. **Public read-back:** `/`, `/work/`, and `/agents/` return the expected route markers and the exact candidate deploy SHA.
6. **Rollback path recorded** before the candidate is called production-ready.

Anything less is **DEGRADED / incomplete proof**, not production completion.

## 5. Candidate procedure

### A. Local / source readiness

For an application change, run the bounded route verification while iterating and `npm run verify:predeploy` before production publishing.

For a docs-only PBDS-HOST proof commit, do not treat the documentation itself as an application acceptance test. The GitHub Actions build remains the deployment-pipeline proof.

Record:

```text
CANDIDATE_MAIN_SHA=<exact main SHA>
```

### B. GitHub publish proof

After the `main` commit lands, confirm `hostinger-static` advances to an Actions-authored commit with this exact subject:

```text
Deploy static site from <CANDIDATE_MAIN_SHA>
```

If `hostinger-static` does not advance to the exact candidate source SHA, stop. Do not touch Hostinger or application code to compensate.

### C. Human Hostinger deployment

In Hostinger hPanel:

1. open the Portfolio Git deployment/application surface;
2. confirm the configured deploy branch is `hostinger-static`;
3. click **Deploy**;
4. wait for the deployment to report success;
5. clear Hostinger cache.

Do not alter repository, branch, path, or deployment settings during this proof.

### D. Authoritative public read-back

Run:

```bash
npm run check:live-deployment -- \
  --base-url https://greatestpmever.com \
  --sha <CANDIDATE_MAIN_SHA>
```

The checker validates all three production surfaces:

- `/` → `data-gpme-route="home"`
- `/work/` → `data-gpme-route="work"`
- `/agents/` → `data-gpme-route="agents"`

and requires each to contain:

```text
data-gpme-deploy-sha="<CANDIDATE_MAIN_SHA>"
```

A browser-visible page alone is insufficient proof because stale Hostinger/cache state can display valid-looking content from an older SHA.

## 6. Rollback procedure

Rollback must preserve Git history and the fixed pipeline.

If a deployed candidate must be rolled back:

1. identify the specific production candidate commit to reverse;
2. create a normal **revert commit on `main`**; do not reset/rebase/force-push;
3. allow the existing GitHub Actions workflow to publish the reverted static output to `hostinger-static`;
4. human clicks Hostinger **Deploy**;
5. human clears Hostinger cache;
6. run `check:live-deployment` against the new revert commit SHA;
7. report rollback complete only after public read-back matches the revert SHA.

Never repair a deployment problem by directly editing `public_html`, directly changing `hostinger-static`, or restoring an old repository snapshot outside normal Git history.

## 7. PBDS-HOST proof record — 2026-09-25

### Pre-proof baseline

At PBDS-HOST start:

```text
main: c12835a00b699123863a4025fb7bee654d69a85b
hostinger-static: 8a62af33fa0592063addb3719e9a04ea30090845
hostinger-static commit subject:
Deploy static site from c12835a00b699123863a4025fb7bee654d69a85b
```

This proves the GitHub-side source → static-publish linkage was functioning immediately before the PBDS-HOST proof package.

### PBDS-HOST candidate

This runbook commit is intentionally docs-only so the gate can exercise the real deployment path without introducing a visual/site migration before PBDS-5.

Record after commit:

```text
candidate main SHA: <populate from GitHub after this file is committed>
candidate hostinger-static SHA: <populate after Actions publish>
Hostinger deployment: PENDING HUMAN DEPLOY
Hostinger cache clear: PENDING
public SHA read-back: PENDING
PBDS-HOST result: DEGRADED until all pending evidence is complete
```

## 8. Exit condition

PBDS-HOST is complete only when the proof record contains:

- exact candidate `main` SHA;
- exact corresponding `hostinger-static` commit SHA and source-SHA commit subject;
- Hostinger deployment success evidence;
- cache-clear confirmation;
- successful public read-back for `/`, `/work/`, and `/agents/` at the exact candidate main SHA;
- rollback procedure above confirmed as the approved recovery path.

After that, the Notion roadmap may advance PBDS-HOST to **Delivered / exit passed** and PBDS-5 may begin.
