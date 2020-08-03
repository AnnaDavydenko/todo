document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  let activeUserEmail = localStorage.getItem("activeUserEmail");

  const userService = new UserService();
  const activeUser = userService.getUserByEmail(activeUserEmail);

  const todoService = new TodoService();

  if (activeUser.userRole === USER_ROLES.ADMIN) {
    return todoService.getUsersWithTodos();
    // вытянуть всех юзеров и в каждом должен быть массив его тудушек
  } else {
    
    let todosArr = activeUser.getUserTodos(userId);
    activeUser.todos = todosArr;
    // вытянуть для активного юзера массив его тудушек и поместить в него, как проперти
  }
};