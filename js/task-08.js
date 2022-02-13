// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.

// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//  где имя поля будет именем свойства, а значение поля - значением свойства.
//  Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

    //  == Variant== 1 

const form = document.querySelector('.login-form')

form.addEventListener("submit", clickOnSubmitBtn);

function clickOnSubmitBtn(event) {
    event.preventDefault();
    
        const { email, password } =  event.currentTarget.elements
  
  if (email.value === "") {
    alert("Так какое мыло говоришь?");
  }
  else if (password.value === "") {
    alert("Шо опять?");
  }
  else { 
      console.log(`Login: ${email.value}, Password: ${password.value}`);
  }
  event.currentTarget.reset();
}

//      === Variant 2===
// const form = document.querySelector('.login-form')

// form.addEventListener("submit", clickOnSubmitBtn);

// function clickOnSubmitBtn(event) {
//     event.preventDefault();
    
//         const { email, password } =  event.currentTarget.elements
  
//   if (email.value === "" || password.value === "") {
//     alert("Please fill in all the fields below");
//   }

//   else { 
//       console.log(`Login: ${email.value}, Password: ${password.value}`);
//   }

//   event.currentTarget.reset();
// } 


  

  