const getLink = (links, href) => {
    return Array.from(links).filter((link) => link.getAttribute('href') === href)[0]
}

const setCurrentNamePage = (link, titleForCurrentPage) => {
    link.classList.add('burger-menu__link--hidden')

    const linkText = link.textContent
    titleForCurrentPage.innerHTML = linkText
}

const PATHS = {
    home: 'index',
    allProjects: 'all-projects-page'
};

(function () {
    const path = window.location.pathname
    const titleForCurrentPage = document.querySelector('.burger-menu__current')
    const links = document.querySelectorAll('.burger-menu__link')
    const burger = document.querySelector('.burger-menu')
    const buttonBack = document.querySelector('.header__prev')

    if (!burger || !links || !titleForCurrentPage) {
        return null
    }

    let currentLink;

    switch (path) {
        case `/${PATHS.home}.html`:
            currentLink = getLink(links, `${PATHS.home}.html`)
            break
        case '/':
            currentLink = getLink(links, `${PATHS.home}.html`)
            break
        case `/${PATHS.allProjects}.html`:
            currentLink = getLink(links, `${PATHS.allProjects}.html`)
            break
        default: {
            if (buttonBack) {
                burger.classList.add('burger-menu--hidden')
                buttonBack.classList.remove('header__prev--hidden')
            }

            break
        }
    }

    currentLink && setCurrentNamePage(currentLink, titleForCurrentPage)
})()