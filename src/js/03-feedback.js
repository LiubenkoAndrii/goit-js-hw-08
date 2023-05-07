import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

const savedFormState = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedFormState) {
  emailInput.value = savedFormState.email;
  messageInput.value = savedFormState.message;
}

form.addEventListener('input', throttle(event => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

form.addEventListener('submit', event => {
  event.preventDefault(); 
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData); 
  localStorage.removeItem(STORAGE_KEY); 
  emailInput.value = ''; 
  messageInput.value = ''; 
});
