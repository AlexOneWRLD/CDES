const burger = () => {
    const burgerToggle = document.querySelector(".burger-menu__toggle");
    const burgerButton = document.querySelector("[data-burger-button]");
    const menuWrapper = document.querySelector('.burger-menu')
    const menu = document.querySelector("[data-menu]");
    const menuLinks = document.querySelectorAll("[data-menu-link]");

    const checkClass = () => {
        if (burgerButton.classList.contains("burger-menu__button--active")) {
            document.addEventListener("keydown", keyHandler);
            burgerButton.setAttribute("aria-expanded", "true");
            burgerButton.setAttribute("aria-label", "закрыть меню");
            burgerButton.focus();
        } else {
            document.removeEventListener("keydown", keyHandler);
            burgerButton.setAttribute("aria-expanded", "false");
            burgerButton.setAttribute("aria-label", "открыть меню");
        }
    };

    const hideBurger = () => {
        burgerButton.classList.remove("burger-menu__button--active");
        menuWrapper.classList.remove('burger-menu--active');
        burgerToggle.classList.remove("burger-menu__toggle--active");
        menu.classList.remove("burger-menu__content--active");
    };

    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle("burger-menu__button--active");
        burgerToggle.classList.toggle("burger-menu__toggle--active");
        menuWrapper.classList.toggle('burger-menu--active');
        menu.classList.toggle("burger-menu__content--active");
        checkClass();
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            hideBurger();
        });
    });

    const focusCatch = (e) => {
        const nodes = menu.querySelectorAll(globalVars.focusEl);
        const nodesArray = Array.prototype.slice.call(nodes);
        const focusedItemIndex = nodesArray.indexOf(document.activeElement);
        if (e.shiftKey && focusedItemIndex === 0) {
            nodesArray[nodesArray.length - 1].focus();
            e.preventDefault();
        }
        if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
            nodesArray[0].focus();
            e.preventDefault();
        }
    };

    const keyHandler = (event) => {
        if (menu.classList.contains("burger-menu__content--active")) {
            if (event.key === "Escape") {
                hideBurger();
                checkClass();
            }

            if (event.which) {
                focusCatch(event);
            }
        }
    };
};

burger();


