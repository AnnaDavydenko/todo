class TodoRepository {
  constructor() {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    this.todosData = JSON.parse(localStorage.getItem("todos"));
  }

  create(todo) {

  }

  update(todo) {

  }

  remove(id) {

  }

  commit() {
    localStorage.setItem("todos", JSON.stringify(this.todosData)); 
  }
}