import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';


const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const repeatPass = document.querySelector('.repeat-pass') as HTMLInputElement;

form?.addEventListener('submit', function(event){
  event.preventDefault();
  hideErrorMessage(this);
  checkEmptyFields(username, email, password, repeatPass);
  checkEmail(email);
  checkCombiningPasswords(password, repeatPass);
  if(shouldSendForm(this)) console.log('FORMULARIO ENVIADO');
});

function hideErrorMessage(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(item => {
    item.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function showErrorMessage(input: HTMLInputElement, msg: string): void{
  const inputField = input.parentElement as HTMLDivElement;
  const errorMessage = inputField.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  inputField.classList.add(SHOW_ERROR_MESSAGES);
}

function checkEmptyFields(...inputs: HTMLInputElement[]):void {
  inputs.forEach(input => {
    if(!input.value) showErrorMessage(input, 'Este campo não pode ficar vazio')
  })
}

function checkEmail(input: HTMLInputElement): void {
  if(!isEmail(input.value)) showErrorMessage(input, 'Email Inválido');
}

function checkCombiningPasswords(password: HTMLInputElement, password2: HTMLInputElement) {
  if(password.value !== password2.value) {
    showErrorMessage(password, 'Passwords doesn\'t match');
    showErrorMessage(password2, 'Passwords doesn\'t match');
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;

  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES)
  .forEach(() => (send = false));

  return send;
}
