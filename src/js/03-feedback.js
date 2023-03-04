import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  // console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedFormData) {
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.message;
} else {
  emailInput.value = '';
  messageInput.value = '';
}

function onFormSubmit(e) {
  e.preventDefault();
  // console.log('send form');
  form.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  
  localStorage.removeItem('feedback-form-state');
}
