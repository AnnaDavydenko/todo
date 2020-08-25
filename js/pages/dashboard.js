document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  let activeUserEmail = localStorage.getItem("activeUserEmail");
  const userService = new UserService();
  const todoService = new TodoService();

  const activeUser = userService.getUserByEmail(activeUserEmail); 

  if (activeUser) {
    if (activeUser.userRole === USER_ROLES.ADMIN) {
      const users = todoService.getUsersWithTodos();
      // вытянуть всех юзеров и в каждом должен быть массив его тудушек
      render(users, activeUser);
    } else {
      let todosArr = todoService.getUserTodos(activeUser.id);
      activeUser.todos = todosArr;
      render([activeUser], activeUser);
      // вытянуть для активного юзера массив его тудушек и поместить в него, как проперти
    }
  } else {
    window.location.href = window.location.origin + '/loginForm.html';
  }

};

function render(usersWithTodos, activeUser) {
  const userCards = document.querySelector("#userCards");
  userCards.innerHTML = "";
  if (Array.isArray(usersWithTodos)) {
    usersWithTodos.forEach((userItem) => {
      const userCardTemplate = document.querySelector("#userCardTemplate").cloneNode(true);
      const userCardTitle = userCardTemplate.querySelector("#userCardTitle");
      const userTasks = userCardTemplate.querySelector("#userTasks");

      userCardTitle.innerText = `${userItem.name}'s tasks`;
      userCardTemplate.setAttribute("id", `user_${userItem.id}`);

      userItem.todos.forEach((todosItem) => {
        const taskTemplate = document.querySelector("#taskTemplate").cloneNode(true);
        const taskTitle = taskTemplate.querySelector("#taskTitle");
        taskTitle.innerText = todosItem.name;
        taskTemplate.setAttribute("id", `todo_${todosItem.id}`);
        userTasks.appendChild(taskTemplate);
      });

      userCards.appendChild(userCardTemplate);
    });
  }
  let topEmail = document.querySelector(".email");
  topEmail.innerText = activeUser.email;
}

function logout(){
  localStorage.removeItem("activeUserEmail");
  location = '/loginForm.html';
}

function getTaskId(element){
  if (element) {
    let addClick = element.closest(".task");
    return addClick.id.slice(5); // честненький айди юзера
  } 
}

function getUserTaskId(element){
  if (element) {
    let addClick = element.closest(".userCard");
    return addClick.id.slice(5); // честненький айди юзера
  } 
}

function addTask(event){
  let userId = getUserTaskId(event.target); // честненький айди юзера
  // присвоить // найти туду /// найти юзера и ему добавить таску
  
  
  const todoService = new TodoService();
  const userService = new UserService();
  let user = userService.getUserById(userId);

  if (user) {
    const todo = new ToDo({ name:"new task" }, user.id);
    todoService.create(todo);
    init();
  }
}



function removeTask(event){
  let userId = getUserTaskId(event.target); // честненький айди юзера
  // присвоить // найти туду /// найти юзера и ему добавить таску
  let taskId = getTaskId(event.target); // event.target встроен
  
  const todoService = new TodoService();
  const userService = new UserService();
  let user = userService.getUserById(userId);
  let todo = todoService.getTaskById(taskId);
  
  if (user && todo) {
    todoService.remove(todo.id);
    init();
  }
}



function editTask(event){

  let taskId = getTaskId(event.target);
  const todoService = new TodoService();
  let todo = todoService.getTaskById(taskId);

  let task = event.target.closest(".task");
  task.classList.add("editTask");
  task.querySelector("input").value = todo.name;

}

function updateTask(event){
  let taskId = getTaskId(event.target);
  const todoService = new TodoService();
  let todo = todoService.getTaskById(taskId);
  let task = event.target.closest(".task");
  task.classList.remove("editTask");
  todo.name = task.querySelector("input").value;
  todoService.update(todo);
  init();
  
}