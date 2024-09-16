const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
  ];
  
  const listElem = document.querySelector('.list');
  
  const renderTasks = tasksList => {
    const tasksElems = tasksList
      .sort((a, b) => a.done - b.done)
      .map(({ text, done }, i) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.id = i;
        checkbox.checked = done;
        checkbox.classList.add('list__item-checkbox');
        if (done) {
          listItemElem.classList.add('list__item_done');
        }
        listItemElem.append(checkbox, text);
  
        return listItemElem;
      });
  
    listElem.append(...tasksElems);
  };
  
  renderTasks(tasks);
  
  // put your code here
  
const checkboxes = Array.from(document.querySelectorAll('.list__item-checkbox'));

const onCheckbox = event => {
    tasks[event.target.id].done = !tasks[event.target.id].done;
    listElem.innerHTML = '';
    renderTasks(tasks);
    const checkboxes = Array.from(document.querySelectorAll('.list__item-checkbox'));
    checkboxes.map(checkbox => checkbox.addEventListener('click', onCheckbox));
}

checkboxes.map(checkbox => checkbox.addEventListener('click', onCheckbox));

const addTask = event => {
    const input = document.querySelector('.task-input');
    const taskName = input.value;
    if (taskName) {
        tasks.push({ text: taskName, done: false });
        input.value = '';
        listElem.innerHTML = '';
        renderTasks(tasks);
        const checkboxes = Array.from(document.querySelectorAll('.list__item-checkbox'));
        checkboxes.map(checkbox => checkbox.addEventListener('click', onCheckbox));
    }
}

const taskBtn = document.querySelector('.create-task-btn');
taskBtn.addEventListener('click', addTask);