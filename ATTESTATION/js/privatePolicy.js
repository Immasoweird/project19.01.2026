document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.closest('.accordion-item');
            const content = this.nextElementSibling;
            const isActive = accordionItem.classList.contains('active');

            // close all
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
            });

            // open if not active
            if (!isActive) {
                accordionItem.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});