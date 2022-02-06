function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const descriptionRef = document.querySelector('.color');
// const buttonRef = document.querySelector('.change-color');

// buttonRef.addEventListener('click', onButtonColor);

// function onButtonColor (event){
//   document.body.style.backgroundColor = getRandomHexColor();
//   descriptionRef.textContent = `${getRandomHexColor()}`;
//  }
    
const btnRef = document.querySelector('.change-color');
const textRef = document.querySelector('color');
btnRef.addEventListener('click', ClickOnColorButton);
ClickOnColorButton = () => {

}
// скрипт изменяет цвет фона элемента <body> через инлайн стиль при клике
//  на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.