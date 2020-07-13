class UserRepository {
   constructor() {
      if (!localStorage.getItem("users")) {
         localStorage.setItem("users", JSON.stringify([]));
      }
      this.usersData = JSON.parse(localStorage.getItem("users")); // "[{id: "13", email: "jojo"}, ...]"
   }

   create(user) {
      this.usersData.push(user);
      this.commit();
   }

   update(user) {
      let existingUser = this.usersData.find(item => item.id === user.id); // object
      if (existingUser) {
         // existingUser{id: user.id, ...
      }
      this.commit();
   }

   deleteUser(id) {
      const existingUser = this.usersData.find(item => item.id === user.id); // object
      if (existingUser) {
         // удалить из массива юзеров по айди
      }
      this.commit();
   }

   commit() {
      localStorage.setItem("users", JSON.stringify(this.usersData)); // кладем в локал сторидж всю новую юсер дату
   }
}
