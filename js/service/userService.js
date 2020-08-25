class UserService {

   constructor() {
      this.repository = new UserRepository();
   }

   create(user) {
      this.repository.create(user);
   }

   update(user) {
      this.repository.update(user);
   }

   remove(id) {
      this.repository.remove(id);
   }

   getUserByEmail(email) {
     return this.repository.getUserByEmail(email);
   }

   getUserById(id){
     return this.repository.getUserById(id);   
   }
}