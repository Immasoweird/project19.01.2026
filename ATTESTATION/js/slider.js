document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    let autoSlideInterval;
    const SLIDE_DELAY = 8000;


    function goToSlide(direction) {
        const currentSlide = document.querySelector('.slide.active');
        const currentIndex = Number(currentSlide.dataset.slide);
        const slidesCount = slides.length;

        // next index
        let newIndex = (currentIndex + direction + slidesCount) % slidesCount;

        // change slide
        currentSlide.classList.remove('active');
        slides[newIndex].classList.add('active');

        // upd state
        syncState();
    }

    // sync dots and slides state
    function syncState() {
        let currentSlide = document.querySelector('.slide.active');
        const currentIndex = Array.from(slides).indexOf(currentSlide);

        // Change slides display
        Array.from(slides).forEach(function (slide, index) {
            slide.dataset.slide = index.toString();
            slide.style.display = index === currentIndex ? 'block' : 'none';
        })

        // Change dots state
        Array.from(dots).forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // AUTOSLIDING
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(() => goToSlide(1), SLIDE_DELAY);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }


    // event handler
    function setupEventListeners() {
        // nav buttons
        nextBtn.addEventListener('click', () => {
            goToSlide(1);
            resetAutoSlide();
        });
        prevBtn.addEventListener('click', () => {
            goToSlide(-1);
            resetAutoSlide();
        });

        // nav on dots
        Array.from(dots).forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const currentSlide = document.querySelector('.slide.active');
                currentSlide.classList.remove('active');
                slides[index].classList.add('active');
                syncState();
            });
        });

        // pause on hover
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
        }
    }

    // init
    function init() {
        setupEventListeners();
        syncState();
        startAutoSlide();
    }

    // start slider
    init();
});