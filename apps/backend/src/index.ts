// https://www.apollographql.com/docs/apollo-server/getting-started

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { schema } from './schema.ts';
import { Context, createContext } from './context.ts';

const server = new ApolloServer<Context>({
  schema
});

const { url } = await startStandaloneServer(server, {
  context: createContext,
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
