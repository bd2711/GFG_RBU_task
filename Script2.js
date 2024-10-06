// Accordion Functionality
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionBody = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionBody.classList.add('open');
        } else {
            accordionBody.classList.remove('open');
        }
    });
});
