import "./_burger.js";
// import "./_type.js";

function marqueeLeft(selector, speed) {
    const parentSelectors = document.querySelectorAll(selector);

    if (!parentSelectors) {
        return null
    }

    parentSelectors.forEach((parentSelector) => {
        const clone = parentSelector.innerHTML;
        const firstElement = parentSelector.children[0];
        let i = 0;
        parentSelector.insertAdjacentHTML('beforeend', clone);
        parentSelector.insertAdjacentHTML('beforeend', clone);

        setInterval(function () {
            firstElement.style.marginLeft = `-${i}px`;
            if (i > firstElement.clientWidth) {
                i = 0;
            }
            i = i + speed;
        }, 0);
    })
}

function marqueeRight(selector, speed) {
    const parentSelectors = document.querySelectorAll(selector);

    if (!parentSelectors) {
        return null;
    }

    parentSelectors.forEach((parentSelector) => {
        const clone = parentSelector.innerHTML;
        let i = 0;
        parentSelector.insertAdjacentHTML('afterend', clone);
        parentSelector.insertAdjacentHTML('afterend', clone);
        const firstElement = parentSelector.children[0];

        console.log(firstElement)

        setInterval(function () {
            firstElement.style.marginLeft = `${i}px`;
            if (i >= firstElement.clientWidth - 500) {
                i = 0;
            }
            i = i + speed;
        }, 0);
    })

    // parentSelectors.forEach((parentSelector) => {
    //     const clone = parentSelector.innerHTML; // Клонируем контент
    //     parentSelector.insertAdjacentHTML('beforeend', clone); // Дублируем содержимое для бесконечной прокрутки

    //     console.log(parentSelector.children[2])
    //     const firstElement = parentSelector.children[0]; // Первый элемент, который будем двигать
    //     let i = 0; // Начальное значение для прокрутки

    //     // Функция для прокрутки текста
    //     setInterval(function () {
    //         firstElement.style.marginRight = `${i}px`; // Сдвиг первого элемента вправо

    //         // Если первый элемент вышел влево, сбрасываем его позицию
    //         if (i >= firstElement.offsetWidth) {
    //             i = -firstElement.offsetWidth; // Начинаем снова с конца первого элемента
    //         }

    //         i += speed; // Увеличиваем значение для следующего сдвига
    //     }, 16); // Обновление каждые 16 мс (примерно 60 FPS)
    // });
}


window.addEventListener('load', marqueeLeft('.marquee--left', 0.2))
window.addEventListener('load', marqueeRight('.marquee--right', 0.2))
