const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }

  const action = e.target.dataset.action;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease'
    ? oldValue - 1
    : oldValue + 1;
  
  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
};

const onChangeStorage = e => {
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onChangeStorage);

counterElem.addEventListener('click', onCounterChange);

const onDocumentLoaded = e => {
  counterValueElem.textContent = localStorage.getItem('counter__value') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);