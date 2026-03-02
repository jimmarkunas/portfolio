// =====================================================
// GLOBAL JAVASCRIPT — jimmarkunas.com
// =====================================================

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {

    // ── Hamburger Menu ────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => mobileMenu.classList.toggle('active'));
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target))
                mobileMenu.classList.remove('active');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('active'));
        });
    }

    // ── Top Nav Active Link (all pages) ───────────────
    const currentPathRaw = window.location.pathname || '/';
    const currentPath = currentPathRaw.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
    const topNavLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

    function normalizeHrefPath(href) {
        if (!href) return '';
        try {
            const path = new URL(href, window.location.origin).pathname;
            return path.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
        } catch {
            return '';
        }
    }

    function isActiveNavPath(linkPath) {
        if (!linkPath) return false;
        if (linkPath === '/work') {
            return currentPath === '/work' ||
                currentPath.startsWith('/work/') ||
                currentPath.startsWith('/founder/');
        }
        return currentPath === linkPath;
    }

    topNavLinks.forEach(link => {
        const linkPath = normalizeHrefPath(link.getAttribute('href'));
        link.classList.toggle('active', isActiveNavPath(linkPath));
    });

    // ── Cross-Browser Banner Layout Engine ─────────────────────────
    const DEFAULT_CASE_LAYOUT = {
        desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
        tablet: { x: 50, y: 50, scale: 1.03, height: 190 },
        mobile: { x: 50, y: 50, scale: 1.08, height: 180 }
    };

    const DEFAULT_CARD_LAYOUT = {
        desktop: { x: 50, y: 50, scale: 1.04 },
        tablet: { x: 50, y: 50, scale: 1.03 },
        mobile: { x: 50, y: 50, scale: 1.02 }
    };

    window.BANNER_LAYOUT_CONFIG = window.BANNER_LAYOUT_CONFIG || {
        case: {
            "page-aa": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 52, scale: 1.03, height: 192 },
                mobile: { x: 50, y: 55, scale: 1.08, height: 182 }
            },
            "page-bi": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 50, scale: 1.05, height: 180 }
            },
            "page-cbd": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 52, scale: 1.07, height: 180 }
            },
            "page-cpse": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 50, scale: 1.06, height: 180 }
            },
            "page-directv01": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 52, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 54, scale: 1.07, height: 180 }
            },
            "page-directv02": {
                desktop: { x: 50, y: 58, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 58, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 60, scale: 1.08, height: 180 }
            },
            "page-foh": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 52, scale: 1.08, height: 180 }
            },
            "page-k2": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 50, scale: 1.08, height: 180 }
            },
            "page-lego": {
                desktop: { x: 50, y: 38, scale: 1.02, height: 200 },
                tablet: { x: 50, y: 42, scale: 1.04, height: 190 },
                mobile: { x: 50, y: 48, scale: 1.12, height: 180 }
            },
            "page-method": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 52, scale: 1.08, height: 180 }
            },
            "page-modere": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 52, scale: 1.06, height: 180 }
            },
            "page-murad": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 52, scale: 1.07, height: 180 }
            },
            "page-nyl": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.03, height: 190 },
                mobile: { x: 50, y: 52, scale: 1.08, height: 180 }
            },
            "page-scj": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 50, scale: 1.02, height: 190 },
                mobile: { x: 50, y: 52, scale: 1.07, height: 180 }
            },
            "page-cwg": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 52, scale: 1.03, height: 190 },
                mobile: { x: 50, y: 56, scale: 1.1, height: 180 }
            },
            "page-zevo": {
                desktop: { x: 50, y: 50, scale: 1.0, height: 200 },
                tablet: { x: 50, y: 52, scale: 1.03, height: 190 },
                mobile: { x: 50, y: 56, scale: 1.1, height: 180 }
            }
        },
        cards: {
            "/work/directv01/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 52, scale: 1.02 } },
            "/work/cpsenergy/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 52, scale: 1.02 } },
            "/work/newyorklife/": { desktop: { x: 50, y: 35, scale: 1.06 }, tablet: { x: 50, y: 37, scale: 1.05 }, mobile: { x: 50, y: 40, scale: 1.04 } },
            "/work/modere/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 50, scale: 1.02 } },
            "/work/bi/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 50, scale: 1.02 } },
            "/work/scj/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 52, scale: 1.02 } },
            "/work/method/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 52, scale: 1.02 } },
            "/work/murad/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 52, scale: 1.02 } },
            "/work/k2/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 52, scale: 1.02 } },
            "/work/cbdistillery/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 52, scale: 1.02 } },
            "/work/foh/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 52, scale: 1.02 } },
            "/work/lego/": { desktop: { x: 50, y: 38, scale: 1.05 }, tablet: { x: 50, y: 42, scale: 1.05 }, mobile: { x: 50, y: 46, scale: 1.03 } },
            "/work/aa/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 50, scale: 1.03 }, mobile: { x: 50, y: 52, scale: 1.02 } },
            "/work/directv02/": { desktop: { x: 50, y: 58, scale: 1.04 }, tablet: { x: 50, y: 58, scale: 1.03 }, mobile: { x: 50, y: 60, scale: 1.02 } },
            "/founder/cwg/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 52, scale: 1.03 }, mobile: { x: 50, y: 56, scale: 1.02 } },
            "/founder/zevo/": { desktop: { x: 50, y: 50, scale: 1.04 }, tablet: { x: 50, y: 52, scale: 1.03 }, mobile: { x: 50, y: 56, scale: 1.02 } }
        }
    };

    const bannerConfig = window.BANNER_LAYOUT_CONFIG;
    const bannerTuneEnabled = new URLSearchParams(window.location.search).get('bannerTune') === '1';
    let forcedBannerBreakpoint = null;

    const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
    const normalizeLinkKey = (raw) => {
        if (!raw) return '';
        try {
            const path = new URL(raw, window.location.origin).pathname;
            const trimmed = path.replace(/\/+$/, '') || '/';
            return trimmed === '/' ? '/' : `${trimmed}/`;
        } catch {
            return raw;
        }
    };

    function getActiveBannerBreakpoint() {
        if (forcedBannerBreakpoint) return forcedBannerBreakpoint;
        if (window.matchMedia('(max-width: 768px)').matches) return 'mobile';
        if (window.matchMedia('(max-width: 1024px)').matches) return 'tablet';
        return 'desktop';
    }

    function getBodyPageKey() {
        const body = document.body;
        if (!body) return '';
        const pageClass = Array.from(body.classList).find(c => c.startsWith('page-'));
        return pageClass || '';
    }

    function resolveLayout(layoutSet, breakpoint, defaultsByBreakpoint) {
        const fallback = defaultsByBreakpoint[breakpoint] || defaultsByBreakpoint.desktop || {};
        const desktop = layoutSet?.desktop || {};
        const current = layoutSet?.[breakpoint] || {};
        return { ...fallback, ...desktop, ...current };
    }

    function applyCaseBannerLayout() {
        const banner = document.querySelector('.case-banner');
        if (!banner) return null;

        const breakpoint = getActiveBannerBreakpoint();
        const pageKey = getBodyPageKey();
        const layoutSet = bannerConfig.case?.[pageKey];
        const layout = resolveLayout(layoutSet, breakpoint, DEFAULT_CASE_LAYOUT);

        banner.style.setProperty('--banner-x', `${layout.x ?? 50}%`);
        banner.style.setProperty('--banner-y', `${layout.y ?? 50}%`);
        banner.style.setProperty('--banner-scale', String(layout.scale ?? 1));
        banner.style.setProperty('--banner-height', `${layout.height ?? 200}px`);

        banner.dataset.bannerKey = pageKey || 'default-case';
        return { target: 'case', key: pageKey, breakpoint, layout };
    }

    function applyCardBannerLayout() {
        const breakpoint = getActiveBannerBreakpoint();
        const cards = document.querySelectorAll('.work-card[data-link]');
        const applied = [];

        cards.forEach(card => {
            const key = normalizeLinkKey(card.getAttribute('data-banner-key') || card.getAttribute('data-link'));
            if (!key) return;

            const img = card.querySelector('.work-preview > img');
            if (!img) return;

            const layoutSet = bannerConfig.cards?.[key];
            const layout = resolveLayout(layoutSet, breakpoint, DEFAULT_CARD_LAYOUT);

            img.style.setProperty('--card-banner-x', `${layout.x ?? 50}%`);
            img.style.setProperty('--card-banner-y', `${layout.y ?? 50}%`);
            img.style.setProperty('--card-banner-scale', String(layout.scale ?? 1.04));

            card.dataset.bannerKey = key;
            img.dataset.bannerKey = key;
            applied.push({ target: 'card', key, breakpoint, layout, card, img });
        });

        return applied;
    }

    function applyBannerLayouts() {
        const caseResult = applyCaseBannerLayout();
        const cardResults = applyCardBannerLayout();
        return { caseResult, cardResults };
    }

    let bannerLayoutRaf = null;
    const queueBannerLayoutApply = () => {
        if (bannerLayoutRaf) return;
        bannerLayoutRaf = requestAnimationFrame(() => {
            applyBannerLayouts();
            if (typeof window.__refreshBannerTunePanel === 'function') window.__refreshBannerTunePanel();
            bannerLayoutRaf = null;
        });
    };

    applyBannerLayouts();
    window.addEventListener('resize', queueBannerLayoutApply);

    if (bannerTuneEnabled) {
        const state = {
            target: document.querySelector('.case-banner') ? 'case' : 'card',
            cardIndex: 0
        };

        const getCardKeys = () => Array.from(new Set(
            Array.from(document.querySelectorAll('.work-card[data-banner-key], .work-card[data-link]'))
                .map(el => normalizeLinkKey(el.getAttribute('data-banner-key') || el.getAttribute('data-link')))
                .filter(Boolean)
        ));

        const getCurrentBreakpoint = () => getActiveBannerBreakpoint();
        const ensureCaseEntry = (key) => {
            if (!key) return null;
            bannerConfig.case[key] = bannerConfig.case[key] || {};
            return bannerConfig.case[key];
        };
        const ensureCardEntry = (key) => {
            if (!key) return null;
            bannerConfig.cards[key] = bannerConfig.cards[key] || {};
            return bannerConfig.cards[key];
        };

        const getActiveKey = () => {
            if (state.target === 'case') {
                return getBodyPageKey();
            }
            const keys = getCardKeys();
            if (keys.length === 0) return '';
            state.cardIndex = ((state.cardIndex % keys.length) + keys.length) % keys.length;
            return keys[state.cardIndex];
        };

        const panel = document.createElement('div');
        panel.setAttribute('id', 'bannerTunePanel');
        panel.style.cssText = [
            'position:fixed',
            'right:12px',
            'bottom:12px',
            'width:320px',
            'max-width:calc(100vw - 24px)',
            'max-height:60vh',
            'overflow:auto',
            'z-index:9999',
            'background:rgba(7,15,35,0.95)',
            'border:1px solid rgba(68,122,203,0.45)',
            'border-radius:10px',
            'padding:10px',
            'font:12px/1.35 monospace',
            'color:#dbe9ff',
            'box-shadow:0 10px 32px rgba(0,0,0,0.45)'
        ].join(';');
        panel.innerHTML =
            '<div style="font-weight:700;margin-bottom:6px;">Banner Tune Mode</div>' +
            '<div id="bannerTuneMeta"></div>' +
            '<div style="margin-top:8px;color:#9fb2d9;">' +
            'Keys: arrows=x/y, [ ]=scale, - +=height(case), 1/2/3=bp, 0=auto, T=target, N/P=card, C=copy' +
            '</div>' +
            '<pre id="bannerTuneSnippet" style="margin-top:8px;white-space:pre-wrap;background:rgba(10,16,28,0.8);padding:8px;border-radius:8px;border:1px solid rgba(68,122,203,0.24);"></pre>' +
            '<button id="bannerTuneCopy" type="button" style="margin-top:8px;padding:6px 10px;background:#1d4f8f;color:white;border:1px solid rgba(125,170,235,0.45);border-radius:8px;cursor:pointer;">Copy Snippet</button>';
        document.body.appendChild(panel);

        const metaEl = panel.querySelector('#bannerTuneMeta');
        const snippetEl = panel.querySelector('#bannerTuneSnippet');
        const copyBtn = panel.querySelector('#bannerTuneCopy');

        const getEntryForCurrent = () => {
            const key = getActiveKey();
            if (!key) return null;
            const bp = getCurrentBreakpoint();

            if (state.target === 'case') {
                const entry = ensureCaseEntry(key);
                entry[bp] = resolveLayout(entry, bp, DEFAULT_CASE_LAYOUT);
                return { collection: 'case', key, bp, entry };
            }

            const entry = ensureCardEntry(key);
            entry[bp] = resolveLayout(entry, bp, DEFAULT_CARD_LAYOUT);
            return { collection: 'cards', key, bp, entry };
        };

        const renderSnippet = (ctx) => {
            if (!ctx) return '';
            return JSON.stringify({
                [ctx.collection]: {
                    [ctx.key]: ctx.entry
                }
            }, null, 2);
        };

        const refreshPanel = () => {
            applyBannerLayouts();
            const ctx = getEntryForCurrent();
            if (!ctx) {
                metaEl.textContent = 'No banner target detected on this page.';
                snippetEl.textContent = '';
                return;
            }
            metaEl.textContent = 'target=' + state.target + ' key=' + ctx.key + ' bp=' + ctx.bp + (forcedBannerBreakpoint ? ' (forced)' : '');
            snippetEl.textContent = renderSnippet(ctx);
        };
        window.__refreshBannerTunePanel = refreshPanel;

        copyBtn.addEventListener('click', () => {
            const text = snippetEl.textContent || '';
            if (!navigator.clipboard || !navigator.clipboard.writeText) {
                copyBtn.textContent = 'Copy unsupported';
                setTimeout(() => { copyBtn.textContent = 'Copy Snippet'; }, 1200);
                return;
            }
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.textContent = 'Copied';
                setTimeout(() => { copyBtn.textContent = 'Copy Snippet'; }, 1200);
            }).catch(() => {
                copyBtn.textContent = 'Copy failed';
                setTimeout(() => { copyBtn.textContent = 'Copy Snippet'; }, 1200);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
            if (tag === 'input' || tag === 'textarea' || e.target?.isContentEditable) return;

            const ctx = getEntryForCurrent();
            if (!ctx) return;
            const slot = ctx.entry[ctx.bp];

            let changed = false;
            const step = e.shiftKey ? 5 : 1;
            const scaleStep = e.shiftKey ? 0.03 : 0.01;

            if (e.key === 'ArrowLeft') { slot.x = clamp((slot.x ?? 50) - step, 0, 100); changed = true; }
            if (e.key === 'ArrowRight') { slot.x = clamp((slot.x ?? 50) + step, 0, 100); changed = true; }
            if (e.key === 'ArrowUp') { slot.y = clamp((slot.y ?? 50) - step, 0, 100); changed = true; }
            if (e.key === 'ArrowDown') { slot.y = clamp((slot.y ?? 50) + step, 0, 100); changed = true; }
            if (e.key === '[') { slot.scale = clamp(((slot.scale ?? 1) - scaleStep), 0.5, 2); changed = true; }
            if (e.key === ']') { slot.scale = clamp(((slot.scale ?? 1) + scaleStep), 0.5, 2); changed = true; }

            if (ctx.collection === 'case') {
                if (e.key === '-') { slot.height = clamp((slot.height ?? 200) - 2, 120, 420); changed = true; }
                if (e.key === '=' || e.key === '+') { slot.height = clamp((slot.height ?? 200) + 2, 120, 420); changed = true; }
            }

            if (e.key === '1') { forcedBannerBreakpoint = 'desktop'; changed = true; }
            if (e.key === '2') { forcedBannerBreakpoint = 'tablet'; changed = true; }
            if (e.key === '3') { forcedBannerBreakpoint = 'mobile'; changed = true; }
            if (e.key === '0') { forcedBannerBreakpoint = null; changed = true; }

            if (e.key.toLowerCase() === 't') {
                if (document.querySelector('.case-banner') && getCardKeys().length > 0) {
                    state.target = state.target === 'case' ? 'card' : 'case';
                    changed = true;
                }
            }
            if (e.key.toLowerCase() === 'n' && state.target === 'card') { state.cardIndex += 1; changed = true; }
            if (e.key.toLowerCase() === 'p' && state.target === 'card') { state.cardIndex -= 1; changed = true; }

            if (e.key.toLowerCase() === 'c') {
                copyBtn.click();
                e.preventDefault();
                return;
            }

            if (changed) {
                e.preventDefault();
                refreshPanel();
            }
        });

        refreshPanel();
    }

    // ── Horizontal Orb Timelines: align all orbs inline ───────────
    function alignOrbTimelines() {
        function isOrbNode(node) {
            const cs = window.getComputedStyle(node);
            const w = parseFloat(cs.width);
            const h = parseFloat(cs.height);
            const radius = parseFloat(cs.borderTopLeftRadius);
            return w >= 60 && w <= 120 &&
                h >= 60 && h <= 120 &&
                Math.abs(w - h) <= 2 &&
                radius >= (Math.min(w, h) / 2) - 2;
        }

        const rows = Array.from(document.querySelectorAll('div')).filter(row => {
            const rowStyle = window.getComputedStyle(row);
            if (rowStyle.display !== 'flex' || rowStyle.position !== 'relative') return false;

            const line = Array.from(row.children).find(child => {
                const cs = window.getComputedStyle(child);
                return cs.position === 'absolute' && parseFloat(cs.height) <= 4;
            });
            if (!line) return false;

            const items = Array.from(row.children).filter(child => child !== line);
            if (items.length < 3) return false;

            const orbCount = items.filter(item => {
                const orb = Array.from(item.querySelectorAll('div')).find(isOrbNode);
                return Boolean(orb);
            }).length;

            return orbCount >= 3;
        });

        rows.forEach(row => {
            const line = Array.from(row.children).find(child => {
                const cs = window.getComputedStyle(child);
                return cs.position === 'absolute' && parseFloat(cs.height) <= 4;
            });
            if (!line) return;

            const items = Array.from(row.children).filter(child => child !== line);
            row.style.alignItems = 'flex-start';

            const firstOrb = items
                .map(item => Array.from(item.querySelectorAll('div')).find(isOrbNode))
                .find(Boolean);

            if (!firstOrb) return;

            // Anchor the horizontal line to the center of the orb row, not the full text block height.
            const lineTop = firstOrb.offsetTop + (firstOrb.offsetHeight / 2);
            line.style.top = `${Math.round(lineTop)}px`;
            line.style.transform = 'translateY(-50%)';
        });
    }

    const hasPotentialOrbTimeline = document.querySelector('.case-section#delivery, .timeline, .timeline-row');
    if (hasPotentialOrbTimeline) {
        alignOrbTimelines();
        window.addEventListener('resize', alignOrbTimelines);
    }

    // ── Case Study Results: normalize card spacing (runtime override) ──
    const resultsSections = document.querySelectorAll('.case-section#results');

    function normalizeResultsSectionSpacing() {
        resultsSections.forEach(resultsSection => {
            const contentBlock = resultsSection.querySelector('.content-block');
            if (contentBlock) contentBlock.style.marginBottom = '0';

            const metricsRow = resultsSection.querySelector('.metrics-row');
            if (!metricsRow) return;

            metricsRow.style.marginTop = '20px';
            metricsRow.style.gap = '16px';
            metricsRow.style.alignItems = 'start';

            metricsRow.querySelectorAll('.metric-card').forEach(card => {
                card.style.padding = '22px 18px';
                card.style.minHeight = '0';
                card.style.height = 'auto';
                card.style.display = 'flex';
                card.style.flexDirection = 'column';
                card.style.justifyContent = 'flex-start';
                card.style.alignItems = 'center';
            });

            metricsRow.querySelectorAll('.metric-card .metric-value').forEach(el => {
                el.style.lineHeight = '1.1';
                el.style.marginBottom = '4px';
            });
            metricsRow.querySelectorAll('.metric-card .metric-label').forEach(el => {
                el.style.marginBottom = '4px';
            });

            const nextBlock = metricsRow.nextElementSibling;
            if (nextBlock) {
                nextBlock.style.marginTop = '20px';
                if (window.getComputedStyle(nextBlock).display === 'grid') {
                    nextBlock.style.gap = '16px';
                    nextBlock.style.alignItems = 'start';
                }
            }

            resultsSection.querySelectorAll('.col-card h4').forEach(h4 => {
                h4.style.marginTop = '0';
                h4.style.marginBottom = '12px';
            });
            resultsSection.querySelectorAll('.col-card ul').forEach(ul => {
                ul.style.margin = '0';
            });
            resultsSection.querySelectorAll('.col-card li:last-child').forEach(li => {
                li.style.marginBottom = '0';
            });
        });
    }

    if (resultsSections.length > 0) {
        normalizeResultsSectionSpacing();
        window.addEventListener('resize', normalizeResultsSectionSpacing);
    }


    // ── Fade-Up Animations ────────────────────────────
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target); // fire once only
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));


    // ── Work Card Click Handlers ──────────────────────
    document.querySelectorAll('.work-card[data-link]').forEach(card => {
        const targetLink = card.getAttribute('data-link');
        if (!targetLink) return;

        card.setAttribute('role', 'link');
        card.setAttribute('tabindex', '0');

        card.addEventListener('click', function () {
            window.location.href = targetLink;
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = targetLink;
            }
        });
    });


    // ── Anchor Nav: Smooth Scroll + Scrollspy ─────────
    // Only runs on pages that have an anchor nav
    const anchorNav = document.querySelector('.anchor-nav');
    const anchorLinks = Array.from(document.querySelectorAll('.anchor-nav a'));

    if (anchorNav && anchorLinks.length > 0) {
        const navItems = anchorLinks
            .map(link => {
                const href = link.getAttribute('href') || '';
                let hash = '';
                try {
                    hash = new URL(href, window.location.origin).hash;
                } catch {
                    hash = href.startsWith('#') ? href : '';
                }
                if (!hash || hash === '#') return null;
                const section = document.querySelector(hash);
                if (!section) return null;
                return { link, hash, section };
            })
            .filter(Boolean);

        if (navItems.length > 0) {
            const isCompactAnchorNav = () => window.matchMedia('(max-width: 1024px)').matches;

            const scrollAnchorLinkIntoView = (link, smooth = false) => {
                if (!link || !isCompactAnchorNav()) return;
                link.scrollIntoView({
                    behavior: smooth ? 'smooth' : 'auto',
                    block: 'nearest',
                    inline: 'nearest'
                });
            };

            let currentActiveHash = '';

            const setActiveAnchor = (activeHash, { force = false, smooth = false } = {}) => {
                if (!force && activeHash === currentActiveHash) return;
                navItems.forEach(({ link, hash }) => {
                    link.classList.toggle('active', hash === activeHash);
                });
                const activeItem = navItems.find(item => item.hash === activeHash);
                if (activeItem) scrollAnchorLinkIntoView(activeItem.link, smooth);
                currentActiveHash = activeHash;
            };

            const getStickyOffset = () => {
                const header = document.querySelector('header');
                const headerHeight = header ? header.getBoundingClientRect().height : 0;
                const anchorNavHeight = anchorNav.getBoundingClientRect().height || 0;
                return Math.round(headerHeight + anchorNavHeight + 12);
            };

            const scrollToHashTarget = (hash, pushHash = true) => {
                const target = document.querySelector(hash);
                if (!target) return;
                const top = target.getBoundingClientRect().top + window.scrollY - getStickyOffset();
                window.scrollTo({ top, behavior: 'smooth' });
                if (pushHash) history.replaceState(null, '', hash);
                setActiveAnchor(hash, { smooth: true });
            };

            // Jump to sections from middle nav
            navItems.forEach(({ link, hash }) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    scrollToHashTarget(hash, true);
                });
            });

            // Scrollspy based on the section currently under the sticky nav
            const updateAnchorSpy = () => {
                const probeY = window.scrollY + getStickyOffset() + 4;
                let active = navItems[0].hash;

                navItems.forEach(({ hash, section }) => {
                    if (section.offsetTop <= probeY) active = hash;
                });

                const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
                if (nearBottom) active = navItems[navItems.length - 1].hash;

                setActiveAnchor(active);
            };

            let anchorSpyTicking = false;
            const queueAnchorSpy = () => {
                if (anchorSpyTicking) return;
                anchorSpyTicking = true;
                requestAnimationFrame(() => {
                    updateAnchorSpy();
                    anchorSpyTicking = false;
                });
            };

            window.addEventListener('scroll', queueAnchorSpy, { passive: true });
            window.addEventListener('resize', queueAnchorSpy);
            window.addEventListener('hashchange', queueAnchorSpy);

            // Ensure correct state on load (and direct deep links)
            if (window.location.hash && navItems.some(item => item.hash === window.location.hash)) {
                setActiveAnchor(window.location.hash, { force: true });
                setTimeout(queueAnchorSpy, 0);
            } else {
                queueAnchorSpy();
            }
        }
    }


    // ── Lightbox (single image) ───────────────────────
    // Used on case study pages for diagram/figure zoom
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
    const managedModals = document.querySelectorAll('.modal');

    function closeAnyModal() {
        managedModals.forEach(modal => modal.classList.remove('active'));
        document.body.style.overflow = '';
    }

    if (modalTriggers.length > 0 && managedModals.length > 0) {
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const targetId = trigger.getAttribute('data-modal-target');
                if (!targetId) return;
                const modal = document.getElementById(targetId);
                if (!modal) return;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        modalCloseButtons.forEach(button => {
            button.addEventListener('click', closeAnyModal);
        });

        managedModals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeAnyModal();
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeAnyModal();
        });
    }

    const lightbox      = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightbox && lightboxImage && lightboxClose) {

        document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const imgSrc = trigger.dataset.src || trigger.querySelector('img')?.src;
                const imgAlt = trigger.querySelector('img')?.alt || '';
                if (imgSrc) {
                    lightboxImage.src = imgSrc;
                    lightboxImage.alt = imgAlt;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
        });
    }

}); // end DOMContentLoaded
