function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  createBtn: document.querySelector(['data-create']),  
  destroyBtn: document.querySelector(['data-destroy']),
  controForm: document.querySelector('#controls'),
  boxes: document.querySelector('#boxes'),
}

ref.createBtn.addEventListener('click', createBoxes)
ref.destroyBtn.addEventListener('click', destroyBoxes)








const createBoxes = amount => { 
 
}

const destroyBoxes = () => {
  ref.boxes.innerHTML = "";
}

// +Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.

// // +++++++++++++  NOTES ++++++++++++++++++++
// const inputRef = document.querySelector('#controls > input');
// const boxesRef = document.querySelector('div#boxes');
// const createBtnRef = document.querySelector('[data-create]');
// const destroyBtnRef = document.querySelector('[data-destroy]')


// createBtnRef.addEventListener('click', () => {
//   createBoxes(inputRef.value);
// });

// destroyBtnRef.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//   let string = '';  let stirng = []
//   for (let i = 0; i < amount; i++) {
//     string += createBox(i);
//   }
//   boxesRef.innerHTML = string;
// }

// function createBox(ratio) {
//   return `<div style="background-color: ${getRandomHexColor()}; height: ${
//     30 + 10 * ratio
//   }px; width: ${30 + 10 * ratio}px"></div>`;
// }

// function destroyBoxes() {
//   boxesRef.innerHTML = '';
//   inputRef.value = '';
// }