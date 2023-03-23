# validate Form

- A library that validates forms, avoids the use of regular expressions in a verbose way

## Instalacion

- you must follow the following steps for the installation

```npm
npm install <name> --save-dev
```

## Usage

- Next I will provide you with small examples using different types of validations

- `email`

```ts
const emailInput = document.getElementById("email") as HTMLInputElement;
const email = emailInput.value;

if (FormValidator.isEmailValid(email)) {
  // dirección de correo electrónico válida
} else {
  // dirección de correo electrónico no válida
}
```

- `password`

```ts
const passwordInput = document.getElementById("password") as HTMLInputElement;
const password = passwordInput.value;

if (FormValidator.isPasswordValid(password)) {
  // contraseña válida
} else {
  // contraseña no válida
}
```

- `phone number`

```ts
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const phoneNumber = phoneInput.value;

if (FormValidator.isPhoneNumberValid(phoneNumber)) {
  // número de teléfono válido
} else {
  // número de teléfono no válido
}
```

## Unit Test

```npm
  npm test
```

## Author

- johan Sebastian Castro Garcia
