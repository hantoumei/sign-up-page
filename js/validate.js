export function validateName(name) {
  let nameError = null
  let nameRegExp = new RegExp(/^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/)
  if (!nameRegExp.test(name)) {
    nameError = 'Имя содержит недопустимые символы или не начинается с буквы'
  }
  if (name.length > 50) {
    nameError = 'Имя слишком длинное. Максимум - 50 символов'
  }
  if (name.length < 1) {
    nameError = 'Пожалуйста, введите имя'
  }
  return nameError
}

export function validateLastName(lastname) {
  let lastNameError = null
  let lastNameRegExp = new RegExp(/^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/)
  if (!lastNameRegExp.test(lastname)) {
    lastNameError = 'Фамилия содержит недопустимые символы или не начинается с буквы'
  }
  if (lastname.length > 50) {
    lastNameError = 'Фамилия слишком длинная. Максимум - 50 символов'
  }
  if (lastname.length < 1) {
    lastNameError = 'Пожалуйста, введите фамилию'
  }
  return lastNameError
}

export function validateEmail(email) {
  let emailError = null
  let emailRegExp = new RegExp(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/)
  if (!emailRegExp.test(email)) {
    emailError = 'Email содержит недопустимые символы или имеет недопустимый формат'
  }
  if (email.length > 50) {
    emailError = 'Email слишком длинный. Максимум - 50 символов'
  }
  if (email.length < 1) {
    emailError = 'Пожалуйста, введите email'
  }
  return emailError
}

export function validatePassword(password) {
  let passwordError = null
  let passwordRegExp = new RegExp(/^(?=.*?[A-ZА-ЯЁ])(?=.*?[a-zа-яё])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
  if (!passwordRegExp.test(password)) {
    passwordError = 'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ (#?!@$%^&*-)'
  }
  if (password.length < 8) {
    passwordError = 'Пароль слишком короткий. Минимум - 8 символов'
  }
  if (password.length > 30) {
    passwordError = 'Пароль слишком длинный. Максимум - 30 символов'
  }
  if (password.length < 1) {
    passwordError = 'Пожалуйста, введите пароль'
  }
  return passwordError
}

export function validatePasswordConfirm (confirm) {
  let password = document.querySelector('#password').value
  let passwordConfirmError = null
  if (confirm !== password) {
    passwordConfirmError = 'Пароль и подтверждение пароля должны совпадать'
  }
  return passwordConfirmError
}

export function validateAge(date) {
  let ageError = null
  let age = (Date.now() - Date.parse(date))/(1000*3600*24*365.25)
  if (!date) {
    ageError = 'Пожалуйста, введите дату рождения'
  }
  if (age < 18) {
    ageError = 'Возраст должен быть от 18 лет'
  }
  if (age > 120) {
    ageError = 'Введенный возраст слишком большой'
  }
  return ageError
}