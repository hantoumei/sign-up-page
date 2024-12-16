import { validateName, validateLastName, validateEmail, validatePassword, validateAge, validatePasswordConfirm } from './validate.js'

let form = document.querySelector('#form')
let submitBtn = document.querySelector('#form-button')
let firstNameInput = document.querySelector('#first-name')
let lastNameInput = document.querySelector('#last-name')
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password')
let passwordConfirmInput = document.querySelector('#password-confirm')
let birthDayInput = document.querySelector('#birth-day')
let inputs = document.querySelectorAll('#form input');

function validateInput(input, error) {
  if (error) {
    form.classList.add('invalid')
    input.classList.add('invalid')
    form.classList.remove('valid')
    input.classList.remove('valid')
  } else {
    form.classList.remove('invalid')
    input.classList.remove('invalid')
    form.classList.add('valid')
    input.classList.add('valid')
  }
  input.nextElementSibling.textContent = error
}

form.addEventListener('input', function () {
  let firstNameError = validateName(firstNameInput.value)
  let lastNameError = validateLastName(lastNameInput.value)
  let emailError = validateEmail(emailInput.value)
  let passwordError = validatePassword(passwordInput.value)
  let passwordConfirmError = validatePasswordConfirm(passwordConfirmInput.value)
  let ageError = validateAge(birthDayInput.value)
  let errors = [firstNameError, lastNameError, emailError, passwordError, passwordConfirmError, ageError]

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener('blur', function () {
      validateInput(input, errors[i])
    }, { once: true })
  }

  passwordInput.addEventListener('change', () => {
    validateInput(passwordConfirmInput, passwordConfirmError)
  }, { once: true })

  if (!firstNameError && !lastNameError && !emailError && !passwordError && !passwordConfirmError && !ageError) {
    form.classList.remove('invalid')
    form.classList.add('valid')
    submitBtn.disabled = false
  } else {
    form.classList.add('invalid')
    form.classList.remove('valid')
    submitBtn.disabled = true
  }
})

submitBtn.addEventListener('click', function (e) {
  e.preventDefault()

  let registrationInfo = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    birthDay: birthDayInput.value
  }

  console.log(registrationInfo);
})