// let form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     buildToDo(e.target.new_task_description.value)
//     form.reset();
// })

// function buildToDo(todo) {
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//     button.addEventListener('click', handleDelete);
//     p.textContent = todo;
//     p.appendChild(button);
//     document.querySelector('#tasks').appendChild(p);
//     button.textContent = "X";
    
//     console.log('p');

// }

// function handleDelete(e) {
//     e.target.parentNode.remove();
// }


let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    taskTodo(e.target.new_task_description.value)
})

const taskTodo = (todo) => {
    let p = document.createElement('p')
    let button = document.createElement('button');
     p.textContent = todo;
     button.textContent = "X";
     p.appendChild(button);

    document.querySelector('#tasks').appendChild(p);
   
    button.addEventListener('click', handleDelete);

}

function handleDelete(e) {
    e.target.parentNode.remove();
}