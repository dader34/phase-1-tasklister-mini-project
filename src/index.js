document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener('submit', (e) => {
    e.preventDefault()
    let taskName = e.target.querySelector("input").value
    let importance = document.querySelector("#create-task-form > select").value
    if (taskName != "") {
      createTask(taskName, importance)
    }

  })
})

const createTask = (txt, pos) => {
  console.log(pos)
  let list = document.createElement("li")
  let task = document.createElement("p")
  task.textContent = txt
  let removeTask = document.createElement("button")
  removeTask.textContent = "Complete"
  removeTask.addEventListener("click", () => {
    list.remove()
  })
  let edit = document.createElement("button")
  edit.textContent = "edit"
  edit.addEventListener("click", () => {
    edit.parentNode = null
    let textInput = document.createElement("input")
    textInput.type = "text"
    textInput.placeholder = "updated text"
    let completed = document.createElement("button")
    completed.textContent = "update"
    list.append(textInput, completed)
    completed.addEventListener("click", () => {
      task.textContent = textInput.value
      textInput.remove()
      completed.remove()
      list.append(edit)
    })
  })
  list.append(task, removeTask, edit)
  if (pos == 1) {
    task.style.color = "red"
    task.style.fontWeight = "bold"
    document.querySelector("#tasks-first").append(list)
  } else if (pos == 2) {
    task.style.color = "orange"
    document.querySelector("#tasks-second").append(list)
  } else {
    task.style.color = "green"
    document.querySelector("#tasks").append(list)
  }

}