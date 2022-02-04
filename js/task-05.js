const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
// ========== Version 1 ================
// inputRef.addEventListener("input", changeText);
// function changeText(event) {
//   inputRef.value !== ""
// ? (outputRef.textContent = event.currentTarget.value)
// : (outputRef.textContent = "Anonymous")
// }

// ============ VERSION 2 ================
// inputRef.addEventListener("input", (event) => {
// inputRef.value === ""
// ? (outputRef.textContent = "Anonymous")
// : (outputRef.textContent = event.currentTarget.value)
//   });


// =========== VERSION 3 ================
inputRef.addEventListener("input", (event) => {

  if (inputRef.value === "") {
    outputRef.textContent = "Anonymous";
}
  else 
    outputRef.textContent = event.currentTarget.value;});
