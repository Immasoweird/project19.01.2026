document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav__item');
    let activeItem = null;


    function updateActiveNavItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        navItems.forEach((item) => {
            const link = item.querySelector('.nav__link');
            if (link.getAttribute('href') === currentPage) {
                item.classList.add('active');
                activeItem = item;
            } else {
                item.classList.remove('active');
            }
        });
    }

    // updating state
    updateActiveNavItem();

    // set handler for move backward or forward
    document.addEventListener('popstate', updateActiveNavItem);


    // special styles for clients (header.css)
    if (window.location.pathname.includes('clients.html')) {
        Array.from(navItems).forEach((item) => {
            item.classList.add('clients-page');
        })
    }

})

