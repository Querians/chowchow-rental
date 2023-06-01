import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from '@/constants';

const authLink = setContext((_, { headers })=> {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
