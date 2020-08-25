class User {
   constructor(user){
      this.id = generateUniqueId();
      this.name = user.name;
      this.surname = user.surname;
      this.email = user.email;
      this.password = user.password;
      this.userRole = user.userRole;
   }
}