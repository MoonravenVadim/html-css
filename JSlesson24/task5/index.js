const tasks = [
    { text: 'Buy milk', done: false, date: new Date() },
    { text: 'Pick up Tom from airport', done: false , date: new Date()},
    { text: 'Visit party', done: false, date: new Date() },
    { text: 'Visit doctor', done: true, date: new Date() },
    { text: 'Buy meat', done: true, date: new Date() },
  ];
  
  const listElem = document.querySelector('.list');
  
  const renderTasks = tasksList => {
    const tasksElems = tasksList
      .sort((a, b) => {
        if (a.done !== b.done) {
            return a.done - b.done; // Невыполненные (false) впереди, выполненные (true) сзади
        }

        return b.date - a.date;
      })
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
    tasks[event.target.id].date = new Date();
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
        tasks.push({ text: taskName, done: false, date: new Date() });
        input.value = '';
        listElem.innerHTML = '';
        renderTasks(tasks);
        const checkboxes = Array.from(document.querySelectorAll('.list__item-checkbox'));
        checkboxes.map(checkbox => checkbox.addEventListener('click', onCheckbox));
    }
}

const taskBtn = document.querySelector('.create-task-btn');
taskBtn.addEventListener('click', addTask);




