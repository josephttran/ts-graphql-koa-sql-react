import { ILoginError, IRegisterError, ILoginValues, IRegisterValues } from '../interfaces/formInterface';

export function validateFirstName(value: string) {
  let error;

  if (!value) {
    error = 'First name required';
  } else if (value.length < 2) {
    error = 'Minimum length is 2';
  }
  return error;
}

export function validateLastName(value: string) {
  let error;

  if (!value) {
    error = 'Last name required';
  } else if (value.length < 2) {
    error = 'Minimum length is 2';
  } 
  return error;
}

export function validateEmail(value: string) {
  let error;

  if (!value) {
    error = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

export function validateLoginPassword(value: string, minLen: number) {
  let error;

  if (!value) {
    error = 'Password required';
  } 
  
  return error;
}

export function validateRegisterPassword(value: string) {
  const minLen = 8;
  let error;

  if (!value) {
    error = 'Password required';
  } else if (value.length < minLen) {
    error = 'password too short';
  }
  return error;
}

export const validateLoginForm = (values: ILoginValues) => {
  let errors: ILoginError = {};

  errors.email = validateEmail(values.email);
  errors.password = validateLoginPassword(values.password, 1);

  return errors;
}

export const validateRegisterForm = (values: IRegisterValues) => {
  let errors: IRegisterError = {};

  errors.firstname = validateFirstName(values.firstname);
  errors.lastname = validateLastName(values.lastname);
  errors.email = validateEmail(values.email);
  errors.password = validateRegisterPassword(values.password);

  return errors;
}