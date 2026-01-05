document.addEventListener('DOMContentLoaded', function () {
    const getStartedBtns = document.querySelectorAll('.btn__pricing');
    const modal = document.getElementById('pricingModal');
    const closeBtn = document.querySelector('.modal__close');
    const form = document.getElementById('pricingForm');

    // open modal window
    function openModal() {
        modal.classList.add('active');
    }

    // close modal window
    function closeModal() {
        modal.classList.add('closing');
        setTimeout(() => {
            modal.classList.remove('active', 'closing');
        }, 300); //  must be equal  transition-duration in CSS
    }

    // handler for btns
    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const card = this.closest('.pricing__card');
            const planTitle = card.querySelector('.pricing__card-name');
            document.getElementById('plan').value = planTitle.textContent.trim().toLowerCase();
            openModal();
        });
    });

    closeBtn.addEventListener('click', closeModal);

    // close modal if click on background
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // close modal if press ESCAPE
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    })

    // Sending data
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log('Sending data:', formDataObj);

        alert('Stay tuned! We`ll back to you soon.');
        closeModal();
        form.reset();
    });
});
