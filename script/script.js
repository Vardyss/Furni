"use strict";

const nav = document.querySelector('.nav');

const testimonials = document.querySelectorAll('.testimonial__item');
const testimonialsBtnRight = document.querySelector('.testimonial-btn--right')
const testimonialsBtnLeft = document.querySelector('.testimonial-btn--left');

const testimonialsDotsContainer = document.querySelector('.testimonial__dots')

const closeBtnMenu = document.querySelector('.mob-menu-close-btn');

const openBtnMenu = document.querySelector('.mob-btn');

const navList = document.querySelector('.nav__nav-list');
const navContainer = document.querySelector('.nav')

const form = document.querySelector('.form');

const btnScrollToTop = document.querySelector('.btn-to-top');

let currentTestimonial = 0;

// Testimonial functionality
// add dots
for (let i = testimonials.length - 1; i > -1; i--) {
    testimonialsDotsContainer.insertAdjacentHTML('afterbegin', `
    <div class="testimonial__dot" data-number="${i}"></div>
    `)
}
const testimonialsDotsAll = document.querySelectorAll('.testimonial__dot');
testimonialsDotsAll[0].classList.add('active');

function dotsUpdate() {
    testimonialsDotsAll.forEach(dot => dot.classList.remove('active'));
    testimonialsDotsAll[currentTestimonial].classList.add('active')
}

// Change slides
function moveTo(number) {
    if (number === 'next') {
        if (currentTestimonial < testimonials.length - 1) {
            currentTestimonial++;
        } else currentTestimonial = 0;
    } else if (number === 'prev') {
        if (currentTestimonial > 0) {
            currentTestimonial--;
        } else currentTestimonial = testimonials.length - 1;
    } else if (typeof number === 'number') currentTestimonial = number;

    testimonials.forEach((item, i) => item.style.transform = `translateX(-${currentTestimonial * 100}%)`);
    dotsUpdate()
}

testimonialsBtnRight.addEventListener('click', () => {
    moveTo('next')
});

testimonialsBtnLeft.addEventListener('click', () => {
    moveTo('prev')
})

testimonialsDotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('testimonial__dot')) moveTo(+e.target.dataset.number);
})

openBtnMenu.addEventListener('click', () => {
    nav.classList.add('show-nav')
})

closeBtnMenu.addEventListener('click', () => {
    nav.classList.remove('show-nav')
})

navList.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.target.closest('.nav__item'));

    if (e.target.closest('.nav__item') && navContainer.classList.contains('show-nav')) {
        navContainer.classList.remove('show-nav');
    }
})

// Smooth scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        if (window.matchMedia('(min-width: 768px)')) {
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
        if (window.matchMedia('(max-width: 767px)')) {
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
};

// Prevent Default form submition, add animation
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelectorAll('.form__input').forEach(n => n.value = '');
    document.querySelector('.form__button').classList.add('animated');
    setTimeout(() => document.querySelector('.form__button').classList.remove('animated'), 2000);
})

// Btn to top
btnScrollToTop.addEventListener('click', () => {
    document.querySelector('.nav__inner').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
})

// Intersection for btnToTop
const heroSection = document.querySelector('.section-hero');

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.isIntersecting);
        if (!entry.isIntersecting) btnScrollToTop.classList.add('show');
        else btnScrollToTop.classList.remove('show')
    })
})

observer.observe(heroSection);