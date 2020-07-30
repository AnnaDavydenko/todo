class ToDo {
  constructor(todo, userId) {
    this.id = generateUniqueId(); // id 1 taska
    this.name = todo.name;
    this.userId = userId;
  }
}