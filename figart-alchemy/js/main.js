// Intersection Observer for fade-in animations
const fadeInElements = document.querySelectorAll('.gallery-item, .featured-item, .process-step, .value-card');
const fadeInOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, fadeInOptions);

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeInObserver.observe(element);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        
        try {
            // Simulated form submission - replace with actual endpoint
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Clear form
            this.reset();
            
            // Show success message (handled by Alpine.js x-show)
            
        } catch (error) {
            console.error('Form submission error:', error);
            // Error handling (can be enhanced based on requirements)
        }
    });
}

// Mobile menu click outside closure
document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (nav && nav.classList.contains('active')) {
        if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            // Using Alpine.js state management
            const mobileMenuState = nav.__x.$data;
            if (mobileMenuState) {
                mobileMenuState.mobileMenuOpen = false;
            }
        }
    }
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }
});

// Testimonial slider auto-rotation (if present)
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
    let currentTestimonial = 0;
    const testimonials = testimonialSlider.children;
    const testimonialCount = testimonials.length;
    
    function rotateTestimonials() {
        Array.from(testimonials).forEach((testimonial, index) => {
            testimonial.style.opacity = index === currentTestimonial ? '1' : '0';
            testimonial.style.transform = index === currentTestimonial ? 'translateX(0)' : 'translateX(100px)';
        });
        
        currentTestimonial = (currentTestimonial + 1) % testimonialCount;
    }
    
    // Initial state
    rotateTestimonials();
    
    // Auto-rotate every 5 seconds
    setInterval(rotateTestimonials, 5000);
}

// Gallery filter animation enhancement
const galleryGrid = document.querySelector('.gallery-grid');
if (galleryGrid) {
    const items = galleryGrid.children;
    
    function animateFilterTransition() {
        Array.from(items).forEach(item => {
            if (item.style.display !== 'none') {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            }
        });
    }
    
    // Observe Alpine.js state changes for category filters
    if (galleryGrid.__x) {
        galleryGrid.__x.$watch('activeCategory', () => {
            animateFilterTransition();
        });
    }
}

// Scroll-based header transformation
const header = document.querySelector('header');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > 100) {
        header.classList.add('scrolled');
        
        if (currentScrollPosition > lastScrollPosition) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    } else {
        header.classList.remove('scrolled');
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollPosition = currentScrollPosition;
});