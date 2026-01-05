let clientCards = document.querySelectorAll('.client-card');
let showCaseCards = document.querySelectorAll('.showCase__item');
let array;
if (window.location.pathname.split('/').pop() === 'clients.html') {
    array = clientCards;
} else if (window.location.pathname.split('/').pop() === 'showCase.html') {
    array = showCaseCards;
}
Array.from(array).forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const sensitivity = 0.1; // more - faster

        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;


        const rotateX = -(e.clientY - cardCenterY) * sensitivity;
        const rotateY = (e.clientX - cardCenterX) * sensitivity;


        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.transition = `transform .2s ease`;
    })

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.5s ease';
    });
})
