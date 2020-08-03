class TodoService {

  constructor() {
    this.todoRepository = new TodoRepository();
    this.userRepository = new UserRepository();
  }

  create(todo) {
    this.todoRepository.create(todo);
  }

  update(todo) {
    this.todoRepository.update(todo);
  }

  remove(id) {
    this.todoRepository.remove(id);
  }

  getUserTodos(userId){    // сибирает таски юзерА
    this.todoRepository.getUserTodos(userId);
  }

  getUsersWithTodos() {
    let usersArr = this.userRepository.getUsers();
    
    return usersArr.map(function(userItem) {
      userItem.todo =  this.todoRepository.getUserTodos()
    }

    
    // вытщить массив всех юзеров, пройтись, для каждого вставить его тудушки
  };

}