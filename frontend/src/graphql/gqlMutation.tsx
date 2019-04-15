import gql from 'graphql-tag';

export const loginUserMutation = () => { 
  return gql`
    mutation LoginUserMutation($email: String!, $password: String!) {
      loginUser(password: $password, email: $email) {
        id
        email
        token
      }
    }`
};

export const registerUserMutation = () => {
  return gql`
    mutation RegisterUserMutation($user: CreateUserInput!){
      registerUser(input: $user) {
        id
        email
        token
      }
    }`
};