

export default function initScroll() {
const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

};

linksInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});
}

initScroll();