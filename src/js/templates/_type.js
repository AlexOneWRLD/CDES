
const initItem = (item, text) => {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    let line = 0;
    let count = 0;
    let out = '';

    return new Promise((resolve) => {
        const typeLine = () => {
            const interval = setTimeout(() => {
                out += text[line][count];
                item.innerHTML = `${out}`;
                count++;

                if (count >= text[line].length) {
                    count = 0;
                    line++;

                    if (line === text.length) {
                        clearTimeout(interval);
                        item.innerHTML = out;
                        resolve()
                        return true;
                    }
                }
                typeLine();
            }, getRandomInt(200));
        };

        typeLine()
    })
}

(function () {

    const containers = document.querySelectorAll('[data-text-type-container]');

    if (containers) {
        containers.forEach((container) => {
            const items = container.querySelectorAll('[data-text-type]');

            if (!items) {
                return null
            }

            const nextTypeItem = async () => {
                try {
                    for (let item in items) {
                        const currentItem = items[item]

                        if (typeof currentItem === 'function') {
                            return
                        }

                        const text = currentItem.getAttribute('data-text-type')

                        await initItem(currentItem, text)
                    }

                } catch (error) {
                    console.log('Ошибка:', error)
                }
            }

            setTimeout(() => {
                nextTypeItem()
            }, 1000)
        })
    }
}())