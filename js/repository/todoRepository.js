class TodoRepository {
  constructor() {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    this.todosData = JSON.parse(localStorage.getItem("todos"));
  }

  create(todo) {
    this.todosData.push(todo);
    this.commit();
  }

  update(todo) {
    let existingTodo = this.todosData.find(todoItem => todoItem.id === todo.id); // object
    if (existingTodo) {
      existingTodo = todo;  
    }
    this.commit();
  }

  remove(id) {
    const existingTodoIndex = this.todosData.findIndex(todoItem => todoItem.id === id); // object
    if (existingTodo) {
       this.todosData.splice(existingTodoIndex, 1);
    }
    this.commit();
  }

  getUserTodos(userId) {
    return this.todosData.map(todoItem => todoItem.userId === userId);
  }

  commit() {
    localStorage.setItem("todos", JSON.stringify(this.todosData)); 
  }

}