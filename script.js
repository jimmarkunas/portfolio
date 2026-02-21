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
    const anchorLinks = document.querySelectorAll('.anchor-nav a');
    const anchoredSections = document.querySelectorAll('section[id]');

    if (anchorLinks.length > 0) {

        // Smooth scroll
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(link.getAttribute('href').substring(1));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Scrollspy via IntersectionObserver (more reliable than scrollY math)
        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anchorLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
                    });
                }
            });
        }, { threshold: 0.25, rootMargin: '-10% 0px -60% 0px' });

        anchoredSections.forEach(section => spyObserver.observe(section));
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
