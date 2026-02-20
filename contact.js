// =====================================================
// CONTACT PAGE — PAGE-SPECIFIC JAVASCRIPT
// Handles EmailJS form submission via REST API
// Depends on: script.js (loaded first)
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

    // ── EmailJS Config ────────────────────────────────
    const EMAILJS_SERVICE_ID  = 'service_izfv466';
    const EMAILJS_TEMPLATE_ID = 'template_jttfdsq';
    const EMAILJS_PUBLIC_KEY  = 'qjUSm5iSVeKkQJcYS';

    const form       = document.getElementById('contactForm');
    const submitBtn  = document.getElementById('submitBtn');
    const btnText    = document.getElementById('btnText');
    const btnArrow   = document.getElementById('btnArrow');
    const successMsg = document.getElementById('successMsg');
    const errorMsg   = document.getElementById('errorMsg');
    const honeypot   = document.getElementById('company_website');

    if (!form) return; // guard: only runs on contact page

    const SUBMIT_COOLDOWN_MS = 30 * 1000;
    const LAST_SUBMIT_KEY = 'contact_last_submit_at';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (honeypot && honeypot.value.trim().length > 0) {
            return;
        }

        const now = Date.now();
        const lastSubmitAt = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
        if (lastSubmitAt && now - lastSubmitAt < SUBMIT_COOLDOWN_MS) {
            errorMsg.style.display = 'block';
            errorMsg.textContent = 'Please wait 30 seconds before sending another message.';
            return;
        }

        // Loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Sending…';
        btnArrow.textContent = '⟳';
        btnArrow.style.animation = 'spin 1s linear infinite';
        errorMsg.style.display = 'none';

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id:  EMAILJS_SERVICE_ID,
                template_id: EMAILJS_TEMPLATE_ID,
                user_id:     EMAILJS_PUBLIC_KEY,
                template_params: {
                    from_name:  document.getElementById('fname').value,
                    from_email: document.getElementById('femail').value,
                    message:    document.getElementById('fmessage').value,
                    reply_to:   document.getElementById('femail').value,
                }
            })
        })
        .then(res => {
            if (!res.ok) throw new Error('Status ' + res.status);
            localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
            // Success state
            submitBtn.style.display = 'none';
            successMsg.style.display = 'block';
            form.querySelectorAll('.field-group').forEach(g => g.style.opacity = '0.4');
        })
        .catch(err => {
            console.error('EmailJS error:', err);
            // Reset button, show error
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
            btnArrow.textContent = '→';
            btnArrow.style.animation = 'none';
            errorMsg.style.display = 'block';
        });
    });

}); // end DOMContentLoaded
