function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

         // =====   Variant 1   =====
const descriptionRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', onButtonColor);

function onButtonColor (event){
  document.body.style.backgroundColor = getRandomHexColor();
  descriptionRef.textContent = `${getRandomHexColor()}`;
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

// ПОЧЕМУ addEventListener в варианте 2 консоль потребовала вынести за область видимости???

             // ========   TASK   ===============
// скрипт изменяет цвет фона элемента <body> через инлайн стиль при клике
//  на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.