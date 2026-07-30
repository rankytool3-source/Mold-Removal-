// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animation library if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic',
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile dropdown toggle
    const mobileServicesBtn = document.getElementById('mobile-services-btn');
    const mobileServicesMenu = document.getElementById('mobile-services-menu');

    if (mobileServicesBtn && mobileServicesMenu) {
        mobileServicesBtn.addEventListener('click', () => {
            mobileServicesMenu.classList.toggle('hidden');
            const icon = mobileServicesBtn.querySelector('svg');
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    }

    // Set active link gracefully
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').replace('./', '').replace('../', ''))) {
            if (link.getAttribute('href') !== '/' && link.getAttribute('href') !== './') {
               link.classList.add('text-slate-900', 'font-medium', 'border-b-2', 'border-slate-800');
               link.classList.remove('text-slate-500');
            }
        }
    });
});
