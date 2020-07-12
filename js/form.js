function getFormFields(formId) { //loginForm или registrationForm
   const obj = {};
   const fields = document.querySelectorAll(`${formId} .field`);
   for (let i = 0; i < fields.length; i++) {
      const element = fields[i];
      //  name -  email  , value ''. итого: email: ''
      let key = element.name;
      let value = element.value;
      obj[key] = value;
   }
   return obj;
}
