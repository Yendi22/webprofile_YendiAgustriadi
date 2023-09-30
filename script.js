function scrollReveal() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
            element.classList.add('active');
        }
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
    });
}

window.addEventListener('scroll', scrollReveal);

const navLinks = document.querySelectorAll('.scroll');
navLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});
