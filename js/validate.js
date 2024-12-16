export function validateName(name) {
  let nameError = null
  let nameRegExp = new RegExp(/^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/)
  if (!nameRegExp.test(name)) {
    nameError = 'The name contains invalid characters or does not start with a letter'
  }
  if (name.length > 50) {
    nameError = 'The name is too long. Max 50 characters'
  }
  if (name.length < 1) {
    nameError = 'Please enter your first name'
  }
  return nameError
}

export function validateLastName(lastname) {
  let lastNameError = null
  let lastNameRegExp = new RegExp(/^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/)
  if (!lastNameRegExp.test(lastname)) {
    lastNameError = 'The last name contains invalid characters or does not start with a letter'
  }
  if (lastname.length > 50) {
    lastNameError = 'The last name is too long. Max 50 characters'
  }
  if (lastname.length < 1) {
    lastNameError = 'Please enter your last name'
  }
  return lastNameError
}

export function validateEmail(email) {
  let emailError = null
  let emailRegExp = new RegExp(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/)
  if (!emailRegExp.test(email)) {
    emailError = 'The email is invalid or contains invalid characters'
  }
  if (email.length > 50) {
    emailError = 'The email is too long. Max 50 characters'
  }
  if (email.length < 1) {
    emailError = 'Please enter your email'
  }
  return emailError
}

export function validatePassword(password) {
  let passwordError = null
  let passwordRegExp = new RegExp(/^(?=.*?[A-ZА-ЯЁ])(?=.*?[a-zа-яё])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
  if (!passwordRegExp.test(password)) {
    passwordError = 'The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character (#?!@$%^&*-)'
  }
  if (password.length < 8) {
    passwordError = 'The password is too short. Min 8 characters'
  }
  if (password.length > 30) {
    passwordError = 'The password is too long. Max 30 characters'
  }
  if (password.length < 1) {
    passwordError = 'Please enter your password'
  }
  return passwordError
}

export function validatePasswordConfirm (confirm) {
  let password = document.querySelector('#password').value
  let passwordConfirmError = null
  if (confirm !== password) {
    passwordConfirmError = 'Password field and confirm password field must match'
  }
  return passwordConfirmError
}

export function validateAge(date) {
  let ageError = null
  let age = (Date.now() - Date.parse(date))/(1000*3600*24*365.25)
  if (!date) {
    ageError = 'Please enter your date of birth'
  }
  if (age < 18) {
    ageError = 'Your age must be 18 and above'
  }
  if (age > 120) {
    ageError = 'Entered age is too big'
  }
  return ageError
}