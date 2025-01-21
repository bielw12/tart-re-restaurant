document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        origin: 'bottom', 
        distance: '50px', 
        duration: 1000, 
        delay: 200, 
        reset: true 
    });

    
    sr.reveal('.hero .sub-headline, .hero .headline', { origin: 'top' });
    sr.reveal('.hero .headline-description', { delay: 400, origin: 'bottom' });

    sr.reveal('.discover-our-story .restaurant-description', { delay: 300 });
    sr.reveal('.discover-our-story .restaurant-info-img', { delay: 400, origin: 'left' });

    sr.reveal('.tasteful-recipes .global-headline', { delay: 300, origin: 'right' });

    sr.reveal('.discover-our-menu .image-group img', { interval: 200 });
    sr.reveal('.discover-our-menu .restaurant-description', { delay: 300, origin: 'right' });

    sr.reveal('.culinary-delight .restaurant-description', { delay: 300 });
    sr.reveal('.culinary-delight .image-group img', { interval: 200 });

    sr.reveal('footer .footer-content-about', { delay: 300 });
    sr.reveal('footer .social-media, footer .newsletter-container', { delay: 400, origin: 'top' });

    
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('open');
        menuToggle.querySelector('.fa-bars').classList.toggle('hidden');
        menuToggle.querySelector('.fa-times').classList.toggle('hidden');
    });

    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});