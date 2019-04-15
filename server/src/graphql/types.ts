import { gql } from 'apollo-server-koa';

export const typeDefs = gql`
  type Query {
    hello: String
    user(email: String!): User
  }

  type User {
    id: ID
    firstname: String
    lastname: String
    email: String
    password: String
  }

  type Mutation {
    loginUser(email: String!, password: String!): AuthUser!
    registerUser(input: CreateUserInput!): AuthUser!
  }
  
  type AuthUser {
    id: ID!
    email: String!
    token: String!
  }

  input CreateUserInput {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }
`;