function validateEmail(email) {
   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if (reg.test(email) == false) {
      return false;
   }
   return true;
}

function passwordMatchRegularExpression(password) {
   // пароль д.б. 8-16 симв, заглавные и маленькие буквы, без пробелов
   const paswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
   if (!password.match(paswd)) {
      return false;
   }
   return true;
}

function passwordMatch(password, passwordConfirmation) {
   return password === passwordConfirmation;
}