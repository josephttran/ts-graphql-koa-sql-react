import { IResolverObject, UserInputError } from 'apollo-server-koa';

import { ICreateUserInput } from '../interfaces/interfaces';
import { UserController } from '../controllers/user.controller';

export const resolvers: IResolverObject = {
  Query: {
    hello: () => 'Hello!',
    user: async (_, { email }) => {
      return await UserController.findByEmail(email);
    }
  },
  Mutation: {
    loginUser: async (_, { email, password }, context, info) => {
      const authUser = await UserController.loginAuthUser({ email, password });

      if (!authUser) {
        throw new UserInputError('Invalid user or password');
      }

      return authUser;
    },
    registerUser: async (_, args: ICreateUserInput, context, info) => {
      const { firstname, lastname, email, password } = args.input;
      const authUser = await UserController.createUserWithToken({ input: { firstname, lastname, email, password } });
      
      if (!authUser) {
        throw new UserInputError('email already taken');
      }

      return authUser;
    }
  }
};