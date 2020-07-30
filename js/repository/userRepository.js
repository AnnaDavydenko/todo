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
      let existingUser = this.usersData.find(userItem => userItem.id === user.id); // object
      if (existingUser) {
         existingUser = user;  
         // или existingUser = {id: existingUser.id, ...user}
      }
      this.commit();
   }

   remove(id) {
      const existingUserIndex = this.usersData.findIndex(userItem => userItem.id === id); // object
      if (existingUser) {
         this.usersData.splice(existingUserIndex, 1);
         // удалить из массива юзеров по айди
      }
      this.commit();
   }

   commit() {
      localStorage.setItem("users", JSON.stringify(this.usersData)); // кладем в локал сторидж всю новую юсер дату
   }
}
