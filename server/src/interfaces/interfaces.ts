export interface IAuthUser {
  id: string;
  email: string;
  token: string;
}

export interface ICreateUserInput {
  input: {
    firstname: string;
    lastname: string 
    email: string;
    password: string;
  }
}