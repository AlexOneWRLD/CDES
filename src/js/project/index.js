import './_marquee.js';
import './_show-text.js';

const toggleInput = document.querySelector('.toggleMenu[type="checkbox"]');
const toggleLabel = document.querySelector('label[for="menu"]');

toggleInput.addEventListener("click", function () {
  if (this.checked) {
    toggleLabel.style.borderRadius = "10px 10px 0 0 "; // Убираем радиус при активном состоянии
  } else {
    toggleLabel.style.borderRadius = "10px"; // Устанавливаем радиус для нижних углов
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const reveals = document.querySelectorAll(".hero__text");

//   reveals.forEach((reveal, index) => {
//     setTimeout(() => {
//       reveal.classList.add("hero__text--active");
//     }, index * 800); // Увеличиваем задержку для каждого элемента
//   });
// });

// var wrapper = document.getElementsByClassName("hero__text")[0];
// console.log(wrapper)
// wrapper.style.opacity = "1";

// // Заменяем текст, разбивая его по словам
// wrapper.innerHTML = wrapper.textContent.trim().split(/\s+/).map(function (word) {
//     return "<span>" + word + "</span>";
// }).join(" ");

// var spans = wrapper.getElementsByTagName("span");

// for (var i = 0; i < spans.length; i++) {
//     spans[i].style.animationDelay = i * 300 + "ms"; // Измените значение задержки по вашему усмотрению
// }

// var wrapper = document.getElementsByClassName("hero__text")[0];
// wrapper.style.opacity = "1";
// wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");

// var spans = wrapper.getElementsByTagName("span");

// for (var i = 0; i < spans.length; i++) {
//   spans[i].style.animationDelay = i * 30 + "ms";
// }


// var wrapper = document.getElementsByClassName("descr-block__text")[0];
// wrapper.style.opacity = "1";
// wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");

// var spans = wrapper.getElementsByTagName("span");

// for (var i = 0; i < spans.length; i++) {
//   spans[i].style.animationDelay = i * 30 + "ms";
// }
