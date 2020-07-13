class User {
   constructor(options){
      this.id = generateUniqueId();
      this.name = options.name;
      this.surname = options.surname;
      this.email = options.email;
      this.password = options.password;
      this.userRole = options.userRole;
   }
}