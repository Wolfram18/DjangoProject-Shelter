var form = document.querySelector(".formWithValidation")
var bttn = form.querySelector("form-submit")

var firstname = form.querySelector("firstname")
var secondname = form.querySelector("secondname")
var phone = form.querySelector("phone")
var email = form.querySelector("email")

var fields = form.querySelectorAll(".field")

var generateWarning = function (text, attribute) {
  var warning = document.createElement("div")
  attribute.style.border = '2px solid red'
  warning.className = 'warning'
  warning.style.color = 'red'
  warning.innerHTML = text
  return warning
}

var removeWarning = function() {
  var warnings = form.querySelectorAll(".warning")

  for (var i = 0; i < warnings.length; i++) {
    warnings[i].remove()
  }
}

var generateSuccess = function (text, attribute) {
  var success = document.createElement("div")
  attribute.style.border = '2px solid green'
  success.className = 'success'
  success.style.color = 'green'
  success.innerHTML = text
  return success
}

var removeSuccess = function() {
  var successes = form.querySelectorAll(".success")

  for (var i = 0; i < successes.length; i++) {
    successes[i].remove()
  }
}

var checkFieldsFill = function() {
    var i = 0;
    if (!fields[i].value) {
      var warning = generateWarning('Поле не должно быть пустым', fields[i])
      fields[i].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      validationFirstname()
    }
    i++
    if (!fields[i].value) {
      var warning = generateWarning('Поле не должно быть пустым', fields[i])
      fields[i].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      validationSecondname()
    }
    i++
    if (!fields[i].value) {
      var warning = generateWarning('Поле не должно быть пустым', fields[i])
      fields[i].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      validationPhone()
    }
    i++ 
    if (!fields[i].value) {
      var warning = generateWarning('Поле не должно быть пустым', fields[i])
      fields[i].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      validationMail()
    }
    i++
    if (!fields[i].value) {
      var warning = generateWarning('Поле не должно быть пустым', fields[i])
      fields[i].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      validationMessage()
    }
}

form.addEventListener('submit', function(event) {
  event.preventDefault()
  removeWarning()
  removeSuccess()
  checkFieldsFill()
})

var validationFirstname = function() {
    var sample = /^[A-ZА-Я'][a-zа-я' ]{2,}/
    var firstnameValue = document.getElementById('firstname').value;
    var valid = sample.test(firstnameValue);
    if (!valid) {
      var warning = generateWarning('Введите корректное имя', document.getElementById('firstname'))
      fields[0].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      var success = generateSuccess('Данные введены корректно', document.getElementById('firstname'))
      fields[0].parentElement.insertAdjacentElement('beforeend', success)
    }
}  

var validationSecondname = function() {
    var sample = /^[A-ZА-Я'][a-zа-я' ]{2,}/
    var secondnameValue = document.getElementById('secondname').value;
    var valid = sample.test(secondnameValue);
    if (!valid) {
      var warning = generateWarning('Введите корректную фамилию', document.getElementById('secondname'))
      fields[1].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      var success = generateSuccess('Данные введены корректно', document.getElementById('secondname'))
      fields[1].parentElement.insertAdjacentElement('beforeend', success)
    }
}  

var validationPhone = function() {
    var sample = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    var phoneValue = document.getElementById('phone').value;
    var valid = sample.test(phoneValue);
    if (!valid) {
      var warning = generateWarning('Введите корректный номер телефона', document.getElementById('phone'))
      fields[2].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      var success = generateSuccess('Данные введены корректно', document.getElementById('phone'))
      fields[2].parentElement.insertAdjacentElement('beforeend', success)
    }
}  

var validationMail = function() {
    var sample = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var mailValue = document.getElementById('email').value;
    var valid = sample.test(mailValue);
    if (!valid) {
      var warning = generateWarning('Введите корректный email', document.getElementById('email'))
      fields[3].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      var success = generateSuccess('Данные введены корректно', document.getElementById('email'))
      fields[3].parentElement.insertAdjacentElement('beforeend', success)
    }
}

var validationMessage = function() {
    var sample = /^/;
    var messageValue = document.getElementById('message').value;
    var valid = sample.test(messageValue);
    if (!valid) {
      var warning = generateWarning('Введите сообщение', document.getElementById('message'))
      fields[4].parentElement.insertAdjacentElement('beforeend', warning)
    } else {
      var success = generateSuccess('Данные введены корректно', document.getElementById('message'))
      fields[4].parentElement.insertAdjacentElement('beforeend', success)
    }
} 