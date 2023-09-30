// const inputEmail = document.querySelector('input[name="email"]');
// const inputMessage = document.querySelector('textarea[name="message"]');

// const saveEmail = event => {
//   localStorage.setItem('email', event.currentTarget.value);
// };

// const saveMessage = event => {
//   localStorage.setItem('message', event.currentTarget.value);
//   console.log(event.currentTarget.value);
// };

// inputEmail.addEventListener('input', saveEmail);
// inputMessage.addEventListener('input', saveMessage);

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');

let userFeedback = {};

const saveUserFeedback = event => {
  userFeedback[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userFeedback));
};

form.addEventListener('input', throttle(saveUserFeedback, 500));

const checkLocalStorage = event => {
  if (localStorage.getItem('feedback-form-state')) {
    const storedFeedback = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (storedFeedback.email) {
      inputEmail.value = storedFeedback.email;
    }
    if (storedFeedback.message) {
      inputMessage.value = storedFeedback.message;
    }
  }
};

document.addEventListener('DOMContentLoaded', checkLocalStorage);

const cleanStorage = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  form.reset();
};

form.addEventListener('submit', cleanStorage);
