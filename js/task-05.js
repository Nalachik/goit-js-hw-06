const textInputRef = document.querySelector("#name-input");
const textOutputRef = document.querySelector("#name-output");

textInputRef.addEventListener("input", (event) => {
  textOutputRef.textContent = event.currentTarget.value;
});

if (textInputRef.value === "") {
    textOutputRef.textContent = "Anonymous";
}
else 
    textOutputRef.textContent = event.currentTarget.value;


// Напиши скрипт который,
//     при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в
//      span#name - output.
//      Если инпут пустой,
//     в спане должна отображаться строка "Anonymous".
