import throttle from 'lodash.throttle';

//const LS_KEY = "feedback-form-state";
//const form = document.querySelector(".feedback-form");

//form.elements.message.value = localStorage.getItem(LS_KEY) ?? "";

//form.addEventListener("input", (evt) => {
 // localStorage.setItem(LS_KEY, evt.target.value);
//});

//form.addEventListener("submit", (evt) => {
//  evt.preventDefault();
//  localStorage.removeItem(LS_KEY);
 // form.reset();
//});

//////////////////////////////////////
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