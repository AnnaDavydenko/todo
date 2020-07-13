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

   deleteUser(id) {
      this.repository.deleteUser(user.id);
   }

}