document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  let activeUserEmail = localStorage.getItem("activeUserEmail");
debugger;
  const userService = new UserService();
  const todoService = new TodoService();

  const activeUser = userService.getUserByEmail(activeUserEmail);

  if (activeUser) {
    if (activeUser.userRole === USER_ROLES.ADMIN) {
      const users = todoService.getUsersWithTodos();
      // вытянуть всех юзеров и в каждом должен быть массив его тудушек
      render(users);
    } else {

      let todosArr = activeUser.getUserTodos(userId);
      activeUser.todos = todosArr;
      render([activeUser]);
      // вытянуть для активного юзера массив его тудушек и поместить в него, как проперти
    }
  } else {
    window.location.href = window.location.origin + '/loginForm.html';
  }


};

function render(usersWithTodos) {
  const userCards = document.querySelector("#userCards");
  if (Array.isArray(usersWithTodos)) {
    usersWithTodos.forEach((userItem) => {
      const userCardTemplate = document.querySelector(".userCardTemplate").cloneNode(true);
      const userCardTitle = userCardTemplate.querySelector("#userCardTitle");
      userCardTitle.innerText = `${userItem.name}'s tasks`;
      userCardTemplate.setAttribute("id", `user_${userItem.id}`);
      userCards.appendChild(userCardTemplate);
    });
  }
}