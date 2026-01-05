document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('preload');

    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="preloader__spinner"></div>';
    document.body.append(preloader);

    window.addEventListener('load', () => {
        // Удаляем класс preload и прелоадер
        setTimeout(() => {
            document.body.classList.remove('preload');
            preloader.remove();
            document.body.style.overflow = 'auto'
        }, 1000);

    });
});