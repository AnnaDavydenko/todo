class TodoService {

  constructor() {
    this.repository = new TodoRepository();
  }

  create(todo) {
    this.repository.create(todo);
  }

  update(todo) {
    this.repository.update(todo);
  }

  remove(id) {
    this.repository.remove(id);
  }

  getUserTodos(userId){    // сибирает таски юзерА
    this.repository.getUserTodos(userId);
  }

}