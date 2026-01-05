// Инициализация переменных
const sections = document.querySelectorAll('section');
const sample = document.querySelector('.sample');
const hero = document.querySelector('.hero');
const body = document.body;
const header = document.querySelector('.header');
const btnTop = document.querySelector('.btn-onTop');

const sampleTagline = document.querySelector('.sample__tagline');
const sampleDescription = document.querySelector('.sample__description');
const sampleTitle = document.querySelector('.sample__title');

// Enable scrolling on all pages
if (window.location.pathname.includes('/index')) {
    body.style.overflow = 'auto';
} else {
    body.style.overflow = 'hidden';
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section--active');
            if (entry.target.classList.contains('sample')) {
                sampleTagline.style.animation = 'fadeInUp .6s ease-out .2s forwards, glowEffect 3s ease-in-out infinite';
                sampleTitle.style.animation = 'fadeInUp .6s ease-out .4s forwards';
                sampleDescription.style.animation = 'fadeInUp .6s ease-out .6s forwards';
                btnTop.style.animation = 'fadeInUp .6s ease-out .8s forwards';
            }
        } else {
            entry.target.classList.remove('section--active');
            entry.target.animation.remove('fadeInUp');

        }
    })
}, { threshold: .8 })


sections.forEach(section => {
    observer.observe(section);
})


