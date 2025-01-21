import { throttle } from './_throttle.js';

(function () {
    const header = document.querySelector('.header')
    if (!header) {
        return null
    }

    const changeHeaderHeight = () => {
        console.log('changeHeaderHeight')
        document.querySelector(':root').style.setProperty('--header-height', `${header.offsetHeight}px`);
    }

    changeHeaderHeight()

    const changeHeaderHeightThrottle = throttle(changeHeaderHeight)
    window.addEventListener('resize', changeHeaderHeightThrottle)
})()
