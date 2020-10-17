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

// Messages

const emailMessage = 'Introduce un email válido';
const countryMessage = 'Escoge un país';
const zipMessage = 'Introduce un código postal válido';
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
  if (pass1 === pass2) {
    pass2.setCustomValidity('');
    return true;
  } else {
    pass2.setCustomValidity(passwordConfMessage);
    pass2.reportValidity();
    return false;
  }
};

email.addEventListener('input', validation(email, emailMessage));
country.addEventListener('input', validation(country, countryMessage));
zip.addEventListener('input', validation(zip, zipMessage));
password.addEventListener('input', validation(password, passwordMessage));
passwordConf.addEventListener('input', passwordCompare(password, passwordConf));
submit.addEventListener('click', // CONTINUAR AQUÍ. LLAMAR FUNCIÓN CREA USER)
