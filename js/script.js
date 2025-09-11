
function initTabNav() {
const tabMenu = document.querySelectorAll('.js-tabmenu li');

const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {

tabContent[0].classList.add('ativo');

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
}

tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        activeTab(index);
    });
});
}
}

initTabNav();


function initAccordionList() {
const accordionList = document.querySelectorAll('.js-accordion dt');
if(accordionList.length) {
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');

function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
});  
}
}

initAccordionList();


function initScroll() {
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


function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalf) < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      })
    }

    scrollAnimation();

    window.addEventListener("scroll", scrollAnimation);
  }
}

initScrollAnimation();