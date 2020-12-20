const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount = 0
let uncheckedCount = 0
let id = 0

let todoArr = []
const todo = {
  id: null,
  checked: false,
  text: '',
  render: function() {
          return `<li class="${classNames.TODO_ITEM}" id="todo${this.id}">` +
              `<input id="todoCheck${this.id}" type="checkbox" class="${classNames.TODO_CHECKBOX}" onClick="updateChecked(${this.id})" ${this.checked ? "checked" : ""}/>` +
              `<input id="todoText${this.id}" type="text" class="${classNames.TODO_TEXT}" value="${this.text}" onChange="updateTodoText(${this.id})"/>` +
              `<button class="${classNames.TODO_DELETE}" onClick="deleteThisTodo(${this.id})">Delete</button>`+
          `</li>`},
}

function findIndexFromId(id) {
  return todoArr.indexOf(todoArr.filter(x => x.id === id)[0])
}

function newTodo() {
  // alert('New TODO button clicked!')
  console.log('Adding new todo to list of: ' + todoArr.length)
  let tdArr = [...todoArr]
  let nTD = {...todo}
  //Take Input
  nTD.text =  prompt("Input Todo Text")
  //Create an ID
  // nTD.id = todoArr.length //This doesn't work after delete without id adjustment
  nTD.id = id++
  tdArr.push(nTD)

  todoArr = [...tdArr]
  renderTodoArr()
  updateCounts()
}

function updateChecked(id) {
  let chbx = document.getElementById('todoCheck' + id)
  let index = findIndexFromId(id)
  let tdArr = [...todoArr]
  tdArr[index].checked = chbx.checked

  todoArr = [...tdArr]
  updateCounts()
}

function updateCounts() {
  let ic = todoArr.length
  let uc = todoArr.filter(element => {return !element.checked}).length
  console.log(`items: ${ic} unchecked: ${uc}`)
  
  itemCountSpan.innerText = ic
  uncheckedCountSpan.innerText = uc
}

function updateTodoText(id) {
  let txtbx = document.getElementById('todoText' + id)
  let index = findIndexFromId(id)
  let tdArr = [...todoArr]
  tdArr[index].text = txtbx.value

  todoArr = [...tdArr]
  renderTodoArr()
}

function renderTodoArr() {
  let str = ''
  todoArr.forEach(element => {
    str = str + element.render()
  });
  list.innerHTML = str
}

function deleteThisTodo(id) {
  console.log('Going to delete todo #', id)
  let index = findIndexFromId(id)
  let tdArr = [...todoArr]
  tdArr.splice(index, 1)

  todoArr = [...tdArr]
  updateCounts()
  renderTodoArr()
}
