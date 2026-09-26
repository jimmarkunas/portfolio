# PBDS-HOST — Deterministic Portfolio Deployment Runbook

**Status:** Delivered / exit passed  
**Owner:** Jim Markunas  
**Effective:** 2026-09-26  
**Gate:** Passed; PBDS-5 may begin  
**Scope:** Portfolio production delivery only; this runbook does not itself authorize unrelated deployment-architecture changes.

## 1. Purpose

PBDS-HOST proves one deterministic production path for the portfolio before Portfolio V2 implementation begins.

Jim approved enabling Hostinger Git Auto Deployment on 2026-09-26 for the existing production connection. The canonical production chain is:

```text
local / main source
  → GitHub main
    → GitHub Actions static export + deploy checks
      → hostinger-static generated release branch
        → Hostinger Git Auto Deployment
          → greatestpmever.com
            → automatic bounded public SHA verification
```

The `hostinger-static` branch is an automated deploy artifact branch. It is not a development branch and must never be pushed directly by an agent or human as a substitute for the workflow.

Routine manual Hostinger **Deploy** and routine manual cache clear are not part of the happy path. Manual Deploy/cache clear remain emergency fallback actions only.

## 2. Authority and non-negotiable constraints

Read these before deployment work:

1. `AGENTS.md`
2. `docs/DEPLOYMENT_INCIDENT_2026-08-20.md`
3. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md`
4. this runbook

Jim's explicit 2026-09-26 approval to enable Hostinger Auto Deployment and the separate live-deployment verification workflow supersedes the older manual-Deploy/manual-verification requirement. All other August 20 safety constraints remain in force.

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

## 3. Fixed production configuration

### GitHub source

- Repository: `jimmarkunas/portfolio`
- Production source branch: `main`
- Development branch policy: `main` only for this repository

### GitHub Actions — build and release

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

### GitHub Actions — production verification

Workflow:

`.github/workflows/verify-live-deployment.yml`

Trigger:

- successful completion of `Build and Publish Static Site` for `main`

The workflow is verification-only. It must not deploy, mutate Hostinger, change Git refs, or schedule itself. It:

1. takes the completed build/release run's exact `head_sha` as the expected production SHA;
2. checks out that exact source SHA;
3. runs the existing bounded `check:live-deployment` verifier against `https://greatestpmever.com`;
4. requires `/`, `/work/`, and `/agents/` to expose the exact source SHA;
5. retries for a bounded interval while Hostinger auto-deploy converges;
6. reports PASS only after exact public SHA convergence; otherwise the workflow fails closed.

Concurrency cancels an older in-progress live verification when a newer production candidate supersedes it, preventing stale candidates from producing false deployment failures.

### Hostinger

Approved Hostinger Git configuration:

- Repository: `https://github.com/jimmarkunas/portfolio`
- Branch: `hostinger-static`
- Install path: `/`
- Auto Deployment: enabled 2026-09-26 by Jim through Hostinger's existing Git integration
- Auto-deploy trigger: GitHub push webhook supplied by Hostinger

The webhook URL is operational configuration and must not be committed to the repository or repeated in documentation.

The happy path must not require a human **Deploy** click or routine cache clear.

## 4. Required production checks

A deployment is considered production-proven only when all of the following evidence exists:

1. **Exact GitHub `main` SHA** recorded.
2. **GitHub build/release PASS:** `Build and Publish Static Site` succeeds for that exact SHA.
3. **Static publish proof:** `hostinger-static` HEAD is an Actions-authored commit whose message is `Deploy static site from <MAIN_SHA>`.
4. **No manual deployment intervention:** no human **Deploy** click is needed for the happy path.
5. **Automatic public convergence:** `/`, `/work/`, and `/agents/` expose the exact candidate deploy SHA without a manual cache clear.
6. **Automatic bounded verification PASS:** `Verify Live Deployment` uses the source workflow's exact `head_sha` and reports PASS only after all required routes expose that SHA.
7. **Fallback classification:** if GitHub release succeeds but the public SHA does not converge, report **DEGRADED / deployment mismatch**. Do not rebuild or mutate application code merely to force deployment.
8. **Cache fallback:** manual cache clear is allowed only after the initial no-intervention proof fails and must be recorded as fallback evidence.
9. **Rollback path:** recovery uses a normal revert commit on `main`, never history rewrite or direct Hostinger/file surgery.

## 5. Candidate procedure

### A. Source readiness

For an application change, run the bounded route verification while iterating and `npm run verify:predeploy` before production publishing.

For docs-only deployment-proof commits, the GitHub Actions build is the deployment-pipeline proof.

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

### C. Hostinger automatic deployment

After `hostinger-static` advances:

1. do **not** click Hostinger **Deploy**;
2. do **not** clear Hostinger cache;
3. allow the GitHub push webhook to trigger Hostinger Git Auto Deployment;
4. use Hostinger deployment output/history as supplemental evidence when available.

The authoritative proof is the public source SHA, not the existence of a webhook delivery alone.

### D. Automatic authoritative public read-back

After `Build and Publish Static Site` completes successfully, `Verify Live Deployment` automatically runs the existing live checker against the source workflow's exact `head_sha`.

The checker validates all three production surfaces:

- `/` → `data-gpme-route="home"`
- `/work/` → `data-gpme-route="work"`
- `/agents/` → `data-gpme-route="agents"`

and requires each to contain:

```text
data-gpme-deploy-sha="<CANDIDATE_MAIN_SHA>"
```

The checker uses cache-busting query parameters, `Cache-Control: no-cache`, retries, and a bounded request timeout. A browser-visible page alone is insufficient proof because stale Hostinger/cache state can display valid-looking content from an older SHA.

For manual diagnosis or explicit re-check, run from the portfolio repository:

```bash
npm run check:live-deployment -- \
  --base-url https://greatestpmever.com \
  --sha <CANDIDATE_MAIN_SHA>
```

### E. Failure and cache fallback

If `Verify Live Deployment` cannot observe the exact public SHA within its bounded verification window:

1. classify the result **DEGRADED / deployment mismatch**;
2. confirm `main` and `hostinger-static` still represent the expected candidate;
3. inspect Hostinger deployment output/history;
4. only then, if evidence indicates stale cache rather than deployment failure, manually clear Hostinger cache once;
5. rerun the exact public SHA check;
6. record that cache intervention was required.

## 6. Rollback procedure

Rollback must preserve Git history and the fixed pipeline.

If a deployed candidate must be rolled back:

1. identify the specific production candidate commit to reverse;
2. create a normal **revert commit on `main`**; do not reset/rebase/force-push;
3. allow the existing GitHub Actions workflow to publish the reverted static output to `hostinger-static`;
4. allow Hostinger Auto Deployment to deploy the new generated release;
5. allow `Verify Live Deployment` to prove the new revert commit SHA publicly;
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

A GitHub push webhook is active for the repository and points to the Hostinger-generated deployment trigger. The webhook URL itself is intentionally not stored here.

### Zero-touch auto-deploy proof — 2026-09-26

```text
candidate main SHA: 74ae07779fba4ca13087bae1ef616173b51efe89
GitHub Actions run: 36231320216 — PASS
build static export: PASS
deploy artifact verification: PASS
publish to hostinger-static: PASS
candidate hostinger-static SHA: 6e6a4aeb30f85c0050089f0e6817c61fd9aa7e2a
release subject: Deploy static site from 74ae07779fba4ca13087bae1ef616173b51efe89
manual Hostinger Deploy used: NO
manual cache clear used: NO
public / read-back: PASS
public /work/ read-back: PASS
public /agents/ read-back: PASS
live verifier result: Live deployment verified for 74ae07779fba4ca13087bae1ef616173b51efe89.
PBDS-HOST result: PASS / EXIT PASSED
```

### Automatic verification workflow proof — 2026-09-26

Jim explicitly approved adding a separate post-deploy live-verification workflow.

```text
workflow: .github/workflows/verify-live-deployment.yml
workflow source commit: c7fcc681df2274407ad4a4462f7e6bdc01c31820
source build/release run: 36232455328 — PASS
Verify Live Deployment run: 36232528707 — PASS
Verify exact production SHA step: PASS
manual verification command required: NO
manual Hostinger Deploy required: NO
manual cache clear required: NO
```

This proves the verification control is event-triggered from the successful build/release workflow, uses the exact source SHA, and independently fails closed if production does not converge.

## 8. Exit condition

PBDS-HOST exit passed on 2026-09-26.

Portfolio V2 may now proceed to PBDS-5 using the proven production path above. Any future change to the deployment architecture still requires Jim's explicit approval and must preserve the August 20 safety constraints unless Jim explicitly supersedes them.
