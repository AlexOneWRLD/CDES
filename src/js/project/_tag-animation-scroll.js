(function () {
    const heroDecor = document.querySelector('.hero__decor');
    const dataBlocks = document.querySelectorAll('[data-descr]'); // Замените на ваш атрибут или класс

    if (!heroDecor || !dataBlocks) {
        return null
    }

    // Функция проверки положения блока
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    window.addEventListener('scroll', () => {
        let inVisibleContext = false; // Флаг для проверки видимости блоков

        // Проверяем положение каждого блока
        dataBlocks.forEach(block => {
            if (isInViewport(block)) {
                inVisibleContext = true; // Если хотя бы один блок виден, устанавливаем флаг
            }
        });

        // Изменяем размер при скролле
        if (window.scrollY > 0 && !inVisibleContext) {
            heroDecor.classList.add('hero__decor--small');
        } else {
            heroDecor.classList.remove('hero__decor--small');
        }
    });
})()