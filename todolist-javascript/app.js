let todoList = [];

function displayTodo(todo) {
    localStorage.setItem('todoListRef', JSON.stringify(todoList)); //Convert array to JSON string to store in local storage

    const list = document.querySelector('.js-todo-list')
    const item = document.querySelector(`[data-key='${todo.id}']`); //Select current todo item in DOM for toggleDone()
    
    if (todo.deleted) {
        item.remove(); //Remove item from DOM after removing from todoList array in deleteTodo()
        if (todoList.length === 0) {
            list.innerHTML = ''; //Clear whitespace from list container when empty to show empty state
        }
        return
    }

    const isChecked = todo.checked ? 'done': ''; //Ternary operator - assign done if true, otherwise empty string
    const node = document.createElement("li");
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
        </button>
    `;
    if (item) {
        list.replaceChild(node, item); //Replace item if it already exists in DOM for toggleDone()
    } else {
        list.append(node);
    }
}

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(), //Initalizes to multiseconds elapsed since 1970
    };
    todoList.push(todo);
    displayTodo(todo);
}

function toggleDone(key) {
    const index = todoList.findIndex(item => item.id === Number(key)); //Returns position of item
    todoList[index].checked = !todoList[index].checked;
    displayTodo(todoList[index]);
}

function deleteTodo(key) {
    const index = todoList.findIndex(item => item.id === Number(key));
    const todo = {
        deleted: true,
        ...todoList[index] //New object with properties of the current todo item
    };
    todoList = todoList.filter(item => item.id !== Number(key)); //Filter out the item
    displayTodo(todo);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    event.preventDefault(); //By default, page refreshes since browser tries to submit form to a server
    const input = document.querySelector('.js-todo-input');
    const text = input.value.trim(); //Remove whitespace at the front and end of string
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus(); //Sets input as active element
    }
});

const list = document.querySelector('.js-todo-list');
//Listen for clicks on the entire list container
list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) { //Check clicked element is a checkbox
        const itemKey = event.target.parentElement.dataset.key; //dataset provides access to custom data attributes (data-)
        toggleDone(itemKey); //Pass in value of data-key on parent (?) element
    }

    if (event.target.classList.contains('js-delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const ref = localStorage.getItem('todoListRef');
    if (ref) {
      todoList = JSON.parse(ref); //Convert JSON string back to array and save in todoList
      todoList.forEach(t => {
        displayTodo(t);
      });
    }
  });
