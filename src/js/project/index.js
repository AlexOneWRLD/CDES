const toggleInput = document.querySelector('.toggleMenu[type="checkbox"]');
const toggleLabel = document.querySelector('label[for="menu"]');

toggleInput.addEventListener("click", function () {
    if (this.checked) {
        toggleLabel.style.borderRadius = "10px 10px 0 0 "; // Убираем радиус при активном состоянии
    } else {
        toggleLabel.style.borderRadius = "10px"; // Устанавливаем радиус для нижних углов
    }
});
