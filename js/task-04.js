// ======== Variant 1 =======
const btnPlusRef = document.querySelector('button[data-action="increment"]')
const btnMinusRef = document.querySelector('button[data-action="decrement"]')
const valueRef = document.querySelector('#value')

let counterValue = 0
function btnPlusClick() { 
    valueRef.textContent = counterValue += 1
}
function btnMinusClick() { 
    valueRef.textContent = counterValue -=1
}
btnPlusRef.addEventListener('click', btnPlusClick)
btnMinusRef.addEventListener('click', btnMinusClick)


console.log(btnPlusRef)
console.log(btnMinusRef)
console.log(valueRef)

// =========== Variant2==========

// 1 - Спан +1-1
// 4 - Добавь слушатели кликов на кнопки,
// внутри которых увеличивай или уменьшай значение счтетчика.
// 5 - Обновляй интерфейс новым значением переменной counterValue.
