function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

         // =====   Variant 1   =====
const descriptionRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', onButtonColor);

function onButtonColor(event) {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  descriptionRef.textContent = currentColor;
 }
           //  ===== Variant 2 ===== 
// const btnRef = document.querySelector('.change-color');
// const textRef = document.querySelector('.color');

// const ClickOnColorButton = () => {
//   const changeColor = getRandomHexColor();
//   textRef.textContent = changeColor;
//   document.body.style.backgroundColor = changeColor;
// }
// btnRef.addEventListener('click', ClickOnColorButton);


             // ========   TASK   ===============
// скрипт изменяет цвет фона элемента <body> через инлайн стиль при клике
//  на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.