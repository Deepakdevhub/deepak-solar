/* ========================================
   DEEPAK SOLAR - Animation Module
   GSAP Animations & Counter Effects
======================================== */

/* === COUNTER ANIMATION === */
export function animateCounter(element, start, end, duration) {
    if (!element || element.dataset.animated === 'true') return;
    element.dataset.animated = 'true';

    const startTime = performance.now();
    const startValue = start;
    const endValue = end;

    function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
    }

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);

        const current = Math.floor(startValue + (endValue - startValue) * easedProgress);
        element.textContent = formatNumber(current);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function formatNumber(num) {
    if (num >= 1000) {
        return num.toLocaleString('en-IN');
    }
    return num.toString();
}

/* === GSAP ANIMATIONS === */
export function initAnimations() {
    // DISABLED GSAP animations - was causing elements to disappear
    // All content is now visible by default
    console.log('GSAP animations disabled for better compatibility');
}

/* === PARALLAX SCROLL EFFECT === */
export function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.5;
            const offset = scrollY * speed;
            el.style.transform = `translateY(${offset}px)`;
        });
    }, { passive: true });
}

/* === MAGNETIC BUTTON EFFECT === */
export function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-glow');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// Auto-initialize magnetic buttons
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMagneticButtons);
} else {
    initMagneticButtons();
}
