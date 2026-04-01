// 1. Reveal on Scroll Animation
const revealOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });
};

// 2. Smooth Scrolling for all anchor links
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};

// 3. Image Hover Effects (Gallery)
const initGalleryEffects = () => {
    const images = document.querySelectorAll('.photobox-gallery img');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.03) translateY(-5px)";
            img.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1) translateY(0)";
            img.style.boxShadow = "none";
        });
    });
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    initSmoothScroll();
    initGalleryEffects();
});