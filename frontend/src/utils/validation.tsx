import { LoginValues, RegisterValues } from '../interfaces/formInterface';

export function validateFirstName(value: string) {
  let error = '';

  if (!value) {
    error = 'First name required';
  } else if (value.length < 2) {
    error = 'Minimum length is 2';
  }
  return error;
}

export function validateLastName(value: string) {
  let error = '';

  if (!value) {
    error = 'Last name required';
  } else if (value.length < 2) {
    error = 'Minimum length is 2';
  } 
  return error;
}

export function validateEmail(value: string) {
  let error = '';

  if (!value) {
    error = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

export function validatePassword(value: string, minLen: number) {
  let error = '';

  if (!value) {
    error = 'Password required';
  } else if (minLen != 1 && value.length < minLen) {
    error = 'password too short';
  }
  return error;
}

export function validateLoginForm(values: LoginValues) {
  let errors = {
    email: '',
    password: ''
  }

  errors.email = validateEmail(values.email);
  errors.password = validatePassword(values.password, 1);

  return errors;
}

export function validateRegisterForm(values: RegisterValues) {
  let errors = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  errors.firstname = validateFirstName(values.firstname);
  errors.lastname = validateLastName(values.lastname);
  errors.email = validateEmail(values.email);
  errors.password = validatePassword(values.password, 8);

  return errors;
}