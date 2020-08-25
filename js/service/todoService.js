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
    return this.todoRepository.getUserTodos(userId);
  }

  getTaskById(id){
    return this.todoRepository.getTaskById(id);
  }

  getUsersWithTodos() {
    const that = this;
    const usersArr = this.userRepository.getUsers();
    
    return usersArr.map(function(userItem) {
      userItem.todos = that.todoRepository.getUserTodos(userItem.id);
      return userItem;
    });

    
    // вытщить массив всех юзеров, пройтись, для каждого вставить его тудушки
  };

}