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
  firstname: string;
  lastname: string;
  email: string;
  password: string
}
