// Menu Show Function

const toggleNavMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    toggle?.addEventListener('click' , () => nav?.classList.toggle('show'));
}
toggleNavMenu('nav-toggle', 'nav-menu');

document.getElementById('nav-menu').addEventListener("click",([target]) => {
    const link = target.closest('nav-link');
    if(link){
        document.querySelector('.nav-link.active')?.classList.remove('active');
            link.classList.toggle('active',top <=50 && bottom >=50);
        
    }
});
const headerHeight = document.querySelector('.l-header').offsetHeight;

const scrollActive = () => {
    const scrollY = window.pageYOffset + headerHeight;

    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
        const section = document.getElementById(link.getAttribute('href').slice(1));
        if (section) {
            const rect = section.getBoundingClientRect();
            const top = rect.top + window.pageYOffset - headerHeight;
            const bottom = rect.bottom + window.pageYOffset - headerHeight;

            link.classList.toggle('active-link', scrollY >= top && scrollY < bottom);
        }
    });
};

window.addEventListener('scroll', scrollActive);

document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: 'smooth'
            });
            setTimeout(scrollActive, 500); // Adjust timeout as necessary
        }
    });
});


const revealAnimation = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    });

    sr.reveal(`.home-data, .about-img, .skills-subtitle, .skills-text`, {});
    sr.reveal(`.home-img, .about-subtitle, .about-text, .skills-img`, { delay: 400 });
    sr.reveal(`.home-social-icon`, { interval: 200 });
    sr.reveal(`.skills-data, .work-img, .contact-input`, { interval: 200 });
};

revealAnimation();

