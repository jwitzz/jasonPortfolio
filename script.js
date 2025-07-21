// scrolling delay

const revealElements = [
    document.querySelector('#about-card'),
    document.querySelector('#projects-card'),
    document.querySelector('#contact-form'),
    document.querySelector('#projects-heading')
];

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el, index) => {
        if (!el) return; // 

        const cardTop = el.getBoundingClientRect().top;

        if (cardTop < windowHeight - 100) {
            el.classList.add('reveal');
            revealElements[index] = null; 
        }
    });

  
    if (revealElements.every(el => el === null)) {
        window.removeEventListener('scroll', revealOnScroll);
    }
};


window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);


// project cards delay

const projectsCard = document.querySelector('#projects-card');

const revealProjectsStaggered = () => {
    const cardTop = projectsCard.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
        const tiles = projectsCard.querySelectorAll('.project-tile');
        tiles.forEach((tile, i) => {
            setTimeout(() => {
                tile.classList.add('reveal');
            }, i * 150);
        });

        window.removeEventListener('scroll', revealProjectsStaggered);
    }
};

window.addEventListener('scroll', revealProjectsStaggered);
window.addEventListener('DOMContentLoaded', revealProjectsStaggered);