function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  creatBtn = document.querySelector(['data-create']),  
  destroyBtn = document.querySelector('data-destroy'),
  controForm = document.querySelector('#controls'),
  boxes = document.querySelector('#boxes'),
}