# PBDS-HOST — Deterministic Portfolio Deployment Runbook

**Status:** Active auto-deployment proof package  
**Owner:** Jim Markunas  
**Effective:** 2026-09-26  
**Gate:** Required before PBDS-5 Portfolio V2 pilot  
**Scope:** Portfolio production delivery only; this runbook does not authorize PBDS-5 migration.

## 1. Purpose

PBDS-HOST proves one deterministic production path for the portfolio before Portfolio V2 implementation begins.

Jim approved enabling Hostinger Git Auto Deployment on 2026-09-26 for the existing production connection. The candidate production chain under proof is:

```text
local / main source
  → GitHub main
    → GitHub Actions static export + deploy checks
      → hostinger-static generated release branch
        → Hostinger Git Auto Deployment
          → greatestpmever.com
            → bounded public SHA read-back
```

The `hostinger-static` branch is an automated deploy artifact branch. It is not a development branch and must never be pushed directly by an agent or human as a substitute for the workflow.

Routine manual Hostinger **Deploy** and routine manual cache clear are no longer part of the candidate happy path. Manual Deploy/cache clear remain emergency fallback actions only until this auto-deployment path passes PBDS-HOST proof and the older deployment guardrail docs are reconciled.

## 2. Authority and non-negotiable constraints

Read these before deployment work:

1. `AGENTS.md`
2. `docs/DEPLOYMENT_INCIDENT_2026-08-20.md`
3. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md`
4. this runbook

Jim's explicit 2026-09-26 approval to enable Hostinger Auto Deployment supersedes the older manual-Deploy requirement for this bounded PBDS-HOST proof. All other August 20 safety constraints remain in force.

AI agents must not:

- modify `.github/workflows/**` without Jim's explicit approval;
- modify `next.config.mjs`;
- modify deployment verification scripts without Jim's explicit approval;
- modify deployment-related `package.json` scripts without Jim's explicit approval;
- push directly to `hostinger-static`;
- use FTP, FTPS, SFTP, rsync, `lftp`, or another direct Hostinger file transport;
- change Hostinger repository/branch/install-path settings;
- rewrite, reset, rebase, or force-push `main`;
- create an alternate production branch.

If a deployment layer fails, diagnose that layer without redesigning the pipeline.

## 3. Fixed production configuration under proof

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

Approved Hostinger Git configuration:

- Repository: `https://github.com/jimmarkunas/portfolio`
- Branch: `hostinger-static`
- Install path: `/`
- Auto Deployment: enabled 2026-09-26 by Jim through Hostinger's existing Git integration
- Auto-deploy trigger: GitHub push webhook supplied by Hostinger

The webhook URL is operational configuration and must not be committed to the repository or repeated in documentation.

The happy path must not require a human **Deploy** click or routine cache clear.

## 4. Required checks before PBDS-HOST can pass

PBDS-HOST passes only when one post-auto-deploy candidate has all of the following evidence:

1. **Exact GitHub `main` SHA** recorded.
2. **GitHub build/release PASS:** `Build and Publish Static Site` succeeds for that exact SHA.
3. **Static publish proof:** `hostinger-static` HEAD is an Actions-authored commit whose message is `Deploy static site from <MAIN_SHA>`.
4. **No manual deployment intervention:** no human **Deploy** click is used for the candidate proof.
5. **Automatic public convergence:** `/`, `/work/`, and `/agents/` expose the exact candidate deploy SHA without a manual cache clear.
6. **Bounded verification:** the live-site verifier polls for a bounded interval and reports PASS only when all required routes expose the candidate SHA.
7. **Fallback classification:** if GitHub release succeeds but the public SHA does not converge, report **DEGRADED / deployment mismatch**. Do not rebuild or mutate application code merely to force deployment.
8. **Cache behavior recorded:** manual cache clear is permitted only after the initial no-intervention proof has failed, and must be recorded as fallback evidence rather than normal success-path behavior.
9. **Rollback path recorded** before the candidate is called production-ready.

Anything less is **DEGRADED / incomplete proof**, not production completion.

## 5. Candidate procedure

### A. Source readiness

For an application change, run the bounded route verification while iterating and `npm run verify:predeploy` before production publishing.

For a docs-only PBDS-HOST proof commit, do not treat the documentation itself as an application acceptance test. The GitHub Actions build remains the deployment-pipeline proof.

Record:

```text
CANDIDATE_MAIN_SHA=<exact main SHA>
```

### B. GitHub build + static publish proof

After the `main` commit lands:

1. confirm `Build and Publish Static Site` succeeds for the exact candidate SHA;
2. confirm the build, deploy-artifact verification, and `hostinger-static` publish steps pass;
3. confirm `hostinger-static` advances to an Actions-authored commit with this exact subject:

```text
Deploy static site from <CANDIDATE_MAIN_SHA>
```

If `hostinger-static` does not advance to the exact candidate source SHA, stop. Do not touch Hostinger or application code to compensate.

### C. Hostinger automatic deployment proof

After `hostinger-static` advances:

1. do **not** click Hostinger **Deploy**;
2. do **not** clear Hostinger cache;
3. allow the GitHub push webhook to trigger Hostinger Git Auto Deployment;
4. use Hostinger deployment output/history as supplemental evidence when available;
5. proceed to bounded public read-back.

The authoritative proof is the public source SHA, not the existence of a webhook delivery alone.

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

The checker already uses cache-busting query parameters, `Cache-Control: no-cache`, retries, and a bounded request timeout. A browser-visible page alone is insufficient proof because stale Hostinger/cache state can display valid-looking content from an older SHA.

### E. Failure and cache fallback

If the exact public SHA does not converge during the bounded verification window:

1. classify the result **DEGRADED / deployment mismatch**;
2. confirm `main` and `hostinger-static` still represent the expected candidate;
3. inspect Hostinger deployment output/history;
4. only then, if evidence indicates stale cache rather than deployment failure, manually clear Hostinger cache once;
5. rerun the exact public SHA check;
6. record that cache intervention was required.

A candidate that needs manual cache clearing may prove deployment correctness, but it does **not** prove the desired zero-touch happy path. PBDS-HOST should remain open until routine cache behavior is understood and accepted.

## 6. Rollback procedure

Rollback must preserve Git history and the fixed pipeline.

If a deployed candidate must be rolled back:

1. identify the specific production candidate commit to reverse;
2. create a normal **revert commit on `main`**; do not reset/rebase/force-push;
3. allow the existing GitHub Actions workflow to publish the reverted static output to `hostinger-static`;
4. allow Hostinger Auto Deployment to deploy the new generated release;
5. run `check:live-deployment` against the new revert commit SHA;
6. use manual Hostinger Deploy/cache clear only as explicitly recorded fallback if auto-deployment/public convergence fails;
7. report rollback complete only after public read-back matches the revert SHA.

Never repair a deployment problem by directly editing `public_html`, directly changing `hostinger-static`, or restoring an old repository snapshot outside normal Git history.

## 7. PBDS-HOST proof record

### Historical manual-deploy proof — 2026-09-25

```text
main: 0d77866ee3a32be83c4444fee71a404eaac2a2e8
hostinger-static: 6d9dfc22153cb27114b8d3b3a36a9924cb52cb0d
GitHub Actions run: 36163219833 — PASS
release subject: Deploy static site from 0d77866ee3a32be83c4444fee71a404eaac2a2e8
```

This proved source → build → generated release branch before Auto Deployment was enabled.

### Auto-deploy configuration — 2026-09-26

Jim approved enabling Hostinger Auto Deployment on the existing Git integration without changing:

```text
repository: https://github.com/jimmarkunas/portfolio
branch: hostinger-static
install path: /
```

Hostinger's existing checkout reported:

```text
Project directory is git repository
On branch hostinger-static
Your branch is up to date with 'origin/hostinger-static'.
nothing to commit, working tree clean
```

A GitHub push webhook is now active for the repository and points to the Hostinger-generated deployment trigger. The webhook URL itself is intentionally not stored here.

### Zero-touch auto-deploy proof candidate — 2026-09-26

This runbook update is intentionally docs-only. Its resulting `main` SHA is the first PBDS-HOST candidate after Auto Deployment was enabled.

Record after commit:

```text
candidate main SHA: <populate after commit>
GitHub Actions run: PENDING
candidate hostinger-static SHA: PENDING
manual Hostinger Deploy used: NO
manual cache clear used: NO
public SHA read-back: PENDING
PBDS-HOST result: DEGRADED until automatic public convergence is proven
```

## 8. Future unattended verification

The repository already contains the authoritative bounded public verifier at `scripts/check-live-deployment.mjs` and the `check:live-deployment` package script.

PBDS-HOST does **not** silently alter the locked GitHub Actions workflow. After the zero-touch path is proven, Jim may separately approve wiring post-release verification into GitHub Actions so a release can surface **PASS** or **DEGRADED** automatically after `hostinger-static` advances.

Until that explicit approval, agents may run/read the existing verifier and may record results, but they must not modify `.github/workflows/**` to add a deployment callback or post-deploy job.

## 9. Exit condition

PBDS-HOST is complete only when the proof record contains:

- exact candidate `main` SHA;
- successful GitHub build/release for that SHA;
- exact corresponding `hostinger-static` commit SHA and source-SHA commit subject;
- proof that no manual Hostinger Deploy was needed;
- successful public read-back for `/`, `/work/`, and `/agents/` at the exact candidate main SHA;
- recorded cache behavior for the proof;
- rollback procedure above confirmed as the approved recovery path.

After that, reconcile the older manual-deploy wording in `AGENTS.md` and `docs/DEPLOYMENT_INCIDENT_2026-08-20.md`, advance PBDS-HOST to **Delivered / exit passed** in Notion, and open PBDS-5.
