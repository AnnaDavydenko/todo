function showPassword(selector) {
   const x = document.querySelector(selector)
   if (x.type === "password") {
      x.type = "text";
   } else {
      x.type = "password";
   }
}

function addClassName(selector, className) {
   let element = document.querySelector(selector);
   element.classList.add(className);
}

function removeClassName(selector, className) {
   let element = document.querySelector(selector);
   element.classList.remove(className);
}

function hideErrorMassage() {
   addClassName(".errorField", "hidden");
}

function showErrorMassage() {
   removeClassName(".errorField", "hidden");
}

function submitRegistrarion() {
   // { email: "123", password: "123", confirmPassord: "123" }
   // полученный объ юзердата(имеил, пароль) из формы
   const userData = getFormFields("#registrationForm");
   const isEmailValid = validateEmail(userData.email);
   const isPasswordValid =
      passwordMatchRegularExpression(userData.password) &&
      passwordMatch(userData.password, userData.confirmPassword);

   if (!isEmailValid || !isPasswordValid) {
      showErrorMassage();
   } else {
      window.location.href = window.location.origin + '/todo/loginForm.html';
   }
}

function register() {
   window.location.href = window.location.origin + '/todo/registrationForm.html';
}

function submitLogin(){
   const userData = getFormFields("#loginForm");
   const isEmailValid = validateEmail(userData.email);
   const isPasswordValid = passwordMatchRegularExpression(userData.password);
   if (!isEmailValid || !isPasswordValid) {
      showErrorMassage();
   } else {
      alert("uspeh");
   }

}