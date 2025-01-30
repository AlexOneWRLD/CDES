const scrollHandler = (hero, heroDecor) => {
    if (window.scrollY > hero.getBoundingClientRect().top + window.scrollY) {
        heroDecor.classList.add('hero__decor--small');
    } else {
        heroDecor.classList.remove('hero__decor--small');
    }
}

(function () {
    const heroDecor = document.querySelector('.hero__decor');
    const heroText = document.querySelector('.hero__wrapper')

    if (!heroDecor || !heroText) {
        return null
    }

    scrollHandler(heroText, heroDecor)

    window.addEventListener('scroll', () => scrollHandler(heroText, heroDecor));
})()