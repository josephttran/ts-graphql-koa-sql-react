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
    registerUser: async (_, args: ICreateUserInput, context, info) => {
      //console.log('logging args: ', args);
      //console.log('context: ', context);
      //console.log('info: ', info);

      const { firstName, lastName, email, password } = args.input;
      const authUser = await UserController.createUserWithToken({ input: { firstName, lastName, email, password } });

      console.log(authUser);
      
      if (!authUser) {
        throw new UserInputError('email already taken');
      }

      return authUser;
    }
  }
};