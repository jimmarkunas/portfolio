// =====================================================
// CHICKS WITH GUNS — PAGE-SPECIFIC JAVASCRIPT
// Depends on: script.js (loaded first)
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

    // ── Photo lightbox ──────────────────────────────────────────
    const photos = [
        { src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&q=90', caption: 'Live photography — arena tour coverage' },
        { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=90', caption: 'Linkin Park at Staples Center, Feb 2011' },
        { src: 'https://images.unsplash.com/photo-1501386761578-eaa54b915123?w=1200&q=90', caption: 'Festival coverage — crowd and stage shots' },
    ];
    let currentPhoto = 0;

    const photoLightbox      = document.getElementById('photoLightbox');
    const photoLightboxImage = document.getElementById('photoLightboxImage');
    const photoCaption       = document.getElementById('photoCaption');

    if (photoLightbox && photoLightboxImage) {
        function showPhoto(index) {
            currentPhoto = (index + photos.length) % photos.length;
            photoLightboxImage.src = photos[currentPhoto].src;
            if (photoCaption) photoCaption.textContent = photos[currentPhoto].caption;
        }

        document.querySelectorAll('.photo-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
                const idx = parseInt(thumb.dataset.index, 10);
                showPhoto(idx);
                photoLightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        const prevBtn = document.getElementById('photoPrev');
        const nextBtn = document.getElementById('photoNext');
        if (prevBtn) prevBtn.addEventListener('click', () => showPhoto(currentPhoto - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => showPhoto(currentPhoto + 1));

        function closePhotoLightbox() {
            photoLightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        const closeBtn = document.getElementById('photoLightboxClose');
        if (closeBtn) closeBtn.addEventListener('click', closePhotoLightbox);

        photoLightbox.addEventListener('click', (e) => {
            if (e.target === photoLightbox) closePhotoLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!photoLightbox.classList.contains('active')) return;
            if (e.key === 'Escape')      closePhotoLightbox();
            if (e.key === 'ArrowLeft')   showPhoto(currentPhoto - 1);
            if (e.key === 'ArrowRight')  showPhoto(currentPhoto + 1);
        });
    }


    // ── Video modal ─────────────────────────────────────────────
    const videoModal      = document.getElementById('videoModal');
    const videoModalFrame = document.getElementById('videoModalFrame');

    if (videoModal && videoModalFrame) {
        window.openVideoModal = function(url, title, sub) {
            const titleEl = document.getElementById('videoModalTitle');
            const subEl   = document.getElementById('videoModalSub');
            if (titleEl) titleEl.textContent = title;
            if (subEl)   subEl.textContent   = sub;
            videoModalFrame.src = url + '?autoplay=1&rel=0';
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        function closeVideoModal() {
            videoModal.classList.remove('active');
            videoModalFrame.src = '';
            document.body.style.overflow = '';
        }

        const videoClose = document.getElementById('videoModalClose');
        if (videoClose) videoClose.addEventListener('click', closeVideoModal);

        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeVideoModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                closeVideoModal();
            }
        });
    }


    // ── Custom Audio Player ─────────────────────────────────────
    const audio = document.getElementById('cwgAudio');
    if (audio) {
        const playBtn   = document.getElementById('cwgPlayBtn');
        const iconPlay  = document.getElementById('cwgIconPlay');
        const iconPause = document.getElementById('cwgIconPause');
        const scrubber  = document.getElementById('cwgScrubber');
        const fill      = document.getElementById('cwgFill');
        const thumb     = document.getElementById('cwgThumb');
        const timeCur   = document.getElementById('cwgTimeCurrent');
        const timeDur   = document.getElementById('cwgTimeDuration');
        const volTrack  = document.getElementById('cwgVolTrack');
        const volFill   = document.getElementById('cwgVolFill');
        const volIcon   = document.getElementById('cwgVolIcon');

        function fmt(s) {
            const m   = Math.floor(s / 60);
            const sec = Math.floor(s % 60);
            return m + ':' + String(sec).padStart(2, '0');
        }

        // Play / pause
        if (playBtn) {
            playBtn.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play().catch(() => {});
                } else {
                    audio.pause();
                }
            });
        }

        audio.addEventListener('play', () => {
            if (iconPlay)  iconPlay.style.display  = 'none';
            if (iconPause) iconPause.style.display = '';
        });
        audio.addEventListener('pause', () => {
            if (iconPlay)  iconPlay.style.display  = '';
            if (iconPause) iconPause.style.display = 'none';
        });
        audio.addEventListener('ended', () => {
            if (iconPlay)  iconPlay.style.display  = '';
            if (iconPause) iconPause.style.display = 'none';
            if (fill)  fill.style.width  = '0%';
            if (thumb) thumb.style.left  = '0%';
            if (timeCur) timeCur.textContent = '0:00';
        });

        // Duration
        audio.addEventListener('loadedmetadata', () => {
            if (timeDur) timeDur.textContent = fmt(audio.duration);
        });

        // Progress
        audio.addEventListener('timeupdate', () => {
            if (!audio.duration) return;
            const pct = (audio.currentTime / audio.duration) * 100;
            if (fill)  fill.style.width  = pct + '%';
            if (thumb) thumb.style.left  = pct + '%';
            if (timeCur) timeCur.textContent = fmt(audio.currentTime);
        });

        // Scrub — click
        function scrubTo(e) {
            const rect = scrubber.getBoundingClientRect();
            const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            if (audio.duration) audio.currentTime = pct * audio.duration;
        }

        if (scrubber) {
            scrubber.addEventListener('click', scrubTo);

            let dragging = false;
            scrubber.addEventListener('mousedown', (e) => { dragging = true; scrubTo(e); });
            document.addEventListener('mousemove', (e) => { if (dragging) scrubTo(e); });
            document.addEventListener('mouseup',   ()  => { dragging = false; });
        }

        // Volume
        let vol = 0.8;
        audio.volume = vol;
        if (volFill) volFill.style.width = (vol * 100) + '%';

        function updateVolIcon() {
            if (!volIcon) return;
            if (audio.muted || audio.volume === 0) {
                volIcon.textContent = '🔇';
            } else if (audio.volume < 0.5) {
                volIcon.textContent = '🔉';
            } else {
                volIcon.textContent = '🔊';
            }
        }

        if (volTrack) {
            volTrack.addEventListener('click', (e) => {
                const rect = volTrack.getBoundingClientRect();
                vol = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                audio.volume = vol;
                if (volFill) volFill.style.width = (vol * 100) + '%';
                updateVolIcon();
            });
        }

        if (volIcon) {
            volIcon.addEventListener('click', () => {
                audio.muted = !audio.muted;
                updateVolIcon();
            });
        }
    }

}); // end DOMContentLoaded
