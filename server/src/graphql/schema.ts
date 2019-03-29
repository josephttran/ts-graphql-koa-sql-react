import { ApolloServer } from 'apollo-server-koa';

import { typeDefs } from './types';
import { resolvers } from './resolver';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer;