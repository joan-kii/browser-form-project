// Objects

class User {
  constructor(email, country, zip, password) {
    this.email = email;
    this.country = country;
    this.zip = zip;
    this.password = password;
    }
}

// Inputs 

const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConf = document.getElementById('passwordConf');
const submit = document.getElementById('submit');
const formContainer = document.getElementById('formContainer');
const confMessage = document.getElementById('confMessage');

// Messages

const emailMessage = 'Introduce un email válido';
const countryMessage = 'Escoge un país';
const zipMessage = 'Introduce un código postal válido. Máximo 5 dígitos';
const passwordMessage = 'La contraseña debe contener 8 dígitos, con al menos un número, una mayúscula y una minúscula';
const passwordConfMessage = 'Las contraseñas introducidas no coinciden';

// Functions 

const validation = (element, message) => {
  if (!element.checkValidity()) {
    element.setCustomValidity(message);
    element.reportValidity();
  } else {
    element.setCustomValidity('');
  }
};

const passwordCompare = (pass1, pass2) => {
  if (pass1.value === pass2.value) {
    passwordConf.setCustomValidity('');
    return true;
  } else {
    passwordConf.setCustomValidity(passwordConfMessage);
    passwordConf.reportValidity();
    return false;
  }
};

function createUser(email, country, zip, password) {
  let newUser = new User(email, country, zip, password);
  formContainer.style.display = 'none';
  confMessage.style.display = 'block';
  console.log(newUser)
};

email.addEventListener('input', function (event) {
  validation(email, emailMessage);
});
country.addEventListener('input', function (event) {
  validation(country, countryMessage);
});
zip.addEventListener('input', function (event) {
  validation(zip, zipMessage);
});
password.addEventListener('input', function (event) {
  validation(password, passwordMessage);
});

submit.addEventListener('click', function (event) {
  event.preventDefault();
  if (passwordCompare(password, passwordConf)) {
    createUser(
    email.value,
    country.value,
    zip.value,
    password.value
  )}
});

