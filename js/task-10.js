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

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.