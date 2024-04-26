const tasksList = document.getElementById("tasks__list");
console.log(tasksList);
const taskAdd = document.getElementById("tasks__add");
const taskInput = document.getElementById("task__input");
console.log(taskInput);
const storedText = localStorage.getItem("textValue");

const enterNewTask = (event) => {
  event.preventDefault();
  
  if(taskInput.value.length) {
    const text = document.createElement("div");
    text.insertAdjacentHTML(
      "beforeEnd",
       `<div class="task">
      <div class="task__title">
        ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
      </div> `
    );
     tasksList.prepend(text);
    taskInput.value = "";
    const removeButton = text.querySelector(".task__remove");
    removeButton.addEventListener("click", () => text.remove());
  }
};

taskAdd.addEventListener("click", enterNewTask);