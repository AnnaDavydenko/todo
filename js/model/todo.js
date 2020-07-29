class ToDo {
  constructor(todo, userId) {
    this.id = generateUniqueId();
    this.name = todo.name;
    this.userId = userId;
  }
}