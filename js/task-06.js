const inputRef = document.querySelector('input');
console.log(inputRef)

inputRef.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length == inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
});
