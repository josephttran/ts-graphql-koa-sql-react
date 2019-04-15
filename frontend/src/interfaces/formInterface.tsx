export interface ILoginError {
  email?: string;
  password?: string;
}

export interface ILoginValues {
  email: string;
  password: string
}

export interface IRegisterError {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
}

export interface IRegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string
}
