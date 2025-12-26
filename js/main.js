/* ========================================
   DEEPAK SOLAR - Main JavaScript
   Initialization & Core Functionality
======================================== */

import { initAnimations, animateCounter } from './animations.js';
import { initForm } from './form.js';
import { initCalculator } from './calculator.js';
import { initLocationCascade } from './locations.js';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Initialize all modules
    initPreloader();
    initNavbar();
    initMobileNav();
    initScrollAnimations();
    initPortfolioTabs();
    initAnimations();
    initForm();
    initCalculator();
    initLocationCascade();
});

/* === PRELOADER === */
function initPreloader() {
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.classList.remove('loading');

            // Trigger hero animations after preloader
            triggerHeroAnimations();
        }, 800);
    });

    // Fallback - hide preloader after 3 seconds max
    setTimeout(() => {
        if (!preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
            document.body.classList.remove('loading');
        }
    }, 3000);
}

/* === HERO ANIMATIONS === */
function triggerHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero .animate-fade-up');
    heroElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, i * 150);
    });

    // Animate hero stats counters
    const statValues = document.querySelectorAll('.hero-stats .stat-value[data-count]');
    statValues.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        animateCounter(stat, 0, target, 2000);
    });
}

/* === NAVBAR === */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();

                // Close mobile nav if open
                document.getElementById('mobile-nav')?.classList.remove('active');

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* === MOBILE NAV === */
function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (!toggle || !mobileNav) return;

    toggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            toggle.classList.remove('active');
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !toggle.contains(e.target)) {
            mobileNav.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
}

/* === SCROLL ANIMATIONS === */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate counters in portfolio section
                if (entry.target.classList.contains('portfolio-stats-banner')) {
                    const counters = entry.target.querySelectorAll('[data-count]');
                    counters.forEach(counter => {
                        const target = parseInt(counter.dataset.count);
                        animateCounter(counter, 0, target, 1500);
                    });
                }

                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe section headers and cards
    document.querySelectorAll('.section-header, .comparison-card, .fact-card, .calc-visual, .benefit-card, .scheme-card, .portfolio-card, .info-card, .portfolio-stats-banner').forEach(el => {
        el.classList.add('animate-fade-up');
        observer.observe(el);
    });

    // Observe reveal groups
    document.querySelectorAll('.reveal-group').forEach(group => {
        observer.observe(group);
    });
}

/* === PORTFOLIO TABS === */
function initPortfolioTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Activate selected
            btn.classList.add('active');
            document.getElementById(`tab-${tabId}`)?.classList.add('active');
        });
    });
}



/* === SUN ORB EFFECT === */
function initSunOrb() {
    const sunOrb = document.getElementById('sun-orb');
    if (!sunOrb) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX * 0.05;
        targetY = e.clientY * 0.05;
    });

    function animate() {
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;

        sunOrb.style.transform = `translate(${currentX}px, ${currentY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}

// Initialize sun orb on desktop only
if (window.matchMedia('(min-width: 768px)').matches) {
    initSunOrb();
}
