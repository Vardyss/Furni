gsap.registerPlugin(ScrollTrigger);

// Pc animations

const laptopScreen = window.matchMedia('(min-width: 992px)');
const tableStart = window.matchMedia('(min-width: 600px)');
const tableEnd = window.matchMedia('(max-width: 992px)');
const mobileScreen = window.matchMedia('(max-width: 600px)');



if (laptopScreen.matches) {
    gsap.to('.section-hero', {
        scrollTrigger: {
            trigger: '.section-hero',
            start: 'top top',
            scrub: true,
        },
        css: {
            backgroundColor: '#215a44'
        }
    })

    gsap.to('.hero__heading', {
        scrollTrigger: {
            trigger: '.section-hero',
            start: '-100 0',
            scrub: true,
        },
        yPercent: -100,
    })

    gsap.to('.hero__img', {
        scrollTrigger: {
            trigger: '.section-hero',
            start: '-100 0',
            scrub: true,
        },
        scale: 1.02,
        y: -50,
    })

    // Craft section

    gsap.from('.craft__description', {
        scrollTrigger: {
            trigger: '.section-craft',
            start: '-200 0',
            scrub: false,
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
    })

    gsap.from('.craft__item', {
        scrollTrigger: {
            trigger: '.section-craft',
            start: '-200 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
    })

    // Why-us section
    gsap.from('.why-us__part--left', {
        scrollTrigger: {
            trigger: '.section-why-us',
            start: '-400 0',
            scrub: false,
        },
        x: -150,
        opacity: 0,
        duration: 0.8,
    })

    gsap.from('.why-us__part--right', {
        scrollTrigger: {
            trigger: '.section-why-us',
            start: '-400 0',
            scrub: false,
        },
        x: 150,
        opacity: 0,
        duration: 0.8,
    })

    // Section help
    gsap.from('.we-help__img--1', {
        scrollTrigger: {
            trigger: '.section-we-help',
            start: '-400 0',
            scrub: false,
        },
        x: 150,
        opacity: 0,
        duration: 0.8,
    })

    gsap.from('.we-help__img--2', {
        scrollTrigger: {
            trigger: '.section-we-help',
            start: '-400 0',
            scrub: false,
        },
        x: -150,
        opacity: 0,
        scale: 0.7,
        duration: 0.8,
    })

    gsap.from('.we-help__img--3', {
        scrollTrigger: {
            trigger: '.section-we-help',
            start: '-400 0',
            scrub: false,
        },
        x: -150,
        opacity: 0,
        scale: 0.7,
        duration: 0.8,
    })

    gsap.from('.we-help__part--right', {
        scrollTrigger: {
            trigger: '.section-we-help',
            start: '-400 0',
            scrub: false,
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
    })

    gsap.from('.examples__item', {
        scrollTrigger: {
            trigger: '.section-examples',
            start: '-500 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
    })

    // Testimonials
    gsap.from('.testimonials', {
        scrollTrigger: {
            trigger: '.section-testimonials',
            start: '-400 0',
            scrub: false,
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
    })

    gsap.from('.testimonials-header', {
        scrollTrigger: {
            trigger: '.section-testimonials',
            start: '-500 0',
            scrub: false,
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
    })

    gsap.from('.blog__heading', {
        scrollTrigger: {
            trigger: '.section-blog',
            start: '-500 0',
            scrub: false,
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
    })

    gsap.from('.blog__item', {
        scrollTrigger: {
            trigger: '.section-blog',
            start: '-400 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
    })
    gsap.from('.blog__item-heading', {
        scrollTrigger: {
            trigger: '.section-blog',
            start: '-200 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
    })

    gsap.from('.blog__item-subheading', {
        scrollTrigger: {
            trigger: '.section-blog',
            start: '-100 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
    })

    gsap.to('.form__img', {
        scrollTrigger: {
            trigger: '.section-form',
            start: '-600 0',
            scrub: 1,
        },
        x: -100,
        duration: 4,
    })
}

if (tableStart.matches && tableEnd.matches) {
    gsap.from('.craft__item', {
        scrollTrigger: {
            trigger: '.section-craft',
            start: '-525 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
    })

    gsap.from('.craft__description', {
        scrollTrigger: {
            trigger: '.section-craft',
            start: '-550 0',
            scrub: false,
        },
        y: 100,
        opacity: 0,
        duration: 1,
    })

    gsap.from('.why-us__part--left', {
        scrollTrigger: {
            trigger: '.section-why-us',
            start: '-550 0',
            scrub: false,
        },
        x: -100,
        opacity: 0,
        duration: 1,
    })

    gsap.from('.we-help__part--right', {
        scrollTrigger: {
            trigger: '.section-we-help',
            start: '-550 0',
            scrub: false,
        },
        x: -100,
        opacity: 0,
        duration: 1,
    })

    gsap.from('.example-item', {
        scrollTrigger: {
            trigger: '.section-examples',
            start: '-525 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
    })

    gsap.from('.section-testimonials', {
        scrollTrigger: {
            trigger: '.section-testimonials',
            start: '-825 0',
            scrub: false,
        },
        y: 100,
        opacity: 0,
        duration: 1,
    })
    gsap.from('.blog__heading', {
        scrollTrigger: {
            trigger: '.section-blog',
            start: '-600 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
    })

    gsap.from('.blog__item', {
        scrollTrigger: {
            trigger: '.section-blog',
            start: '-600 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        tragger: 0.15,
    })
    gsap.from('.blog__item-heading', {
        scrollTrigger: {
            trigger: '.section-blog',
            start: '-500 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        tragger: 0.15,
    })

    gsap.from('.blog__item-subheading', {
        scrollTrigger: {
            trigger: '.section-blog',
            start: '-500 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        tragger: 0.15,
    })
}
if (mobileScreen.matches) {
    gsap.from('.hero__heading', {
        scrollTrigger: {
            trigger: '.nav__inner',
            start: '-100 0',
        },
        opacity: 0,
        x: 200,
        duration: 0.8,
    })

    gsap.from('.hero__img', {
        scrollTrigger: {
            trigger: '.nav__inner',
            start: '-100 0',
        },
        opacity: 0,
        x: -200,
        duration: 0.8,
    })

    gsap.from('.craft__item', {
        scrollTrigger: {
            trigger: '.craft__item',
            start: '-400 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.4,
    })

    gsap.from('.why-us__items::after', {
        scrollTrigger: {
            trigger: '.craft__item',
            start: '-400 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.4,
    })

    gsap.from('.examples__item', {
        scrollTrigger: {
            trigger: '.section-examples',
            start: '-500 0',
            scrub: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
    })
}