import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';

form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LS_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(el) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LS_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(el) {
  el.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LS_KEY);
  el.currentTarget.reset();
  dataForm = {};
}