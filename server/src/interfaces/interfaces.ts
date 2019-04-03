export interface IAuthUser {
  id: string;
  email: string;
  token: string;
}

export interface ICreateUserInput {
  input: {
    firstName: string;
    lastName: string 
    email: string;
    password: string;
  }
}