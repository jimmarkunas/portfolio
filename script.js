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

    alignOrbTimelines();
    window.addEventListener('resize', alignOrbTimelines);


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
            const setActiveAnchor = (activeHash) => {
                navItems.forEach(({ link, hash }) => {
                    link.classList.toggle('active', hash === activeHash);
                });
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
                setActiveAnchor(hash);
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
                setActiveAnchor(window.location.hash);
                setTimeout(queueAnchorSpy, 0);
            } else {
                queueAnchorSpy();
            }
        }
    }


    // ── Lightbox (single image) ───────────────────────
    // Used on case study pages for diagram/figure zoom
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
