const { ApolloClient, InMemoryCache } = require('@apollo/client');

const client = new ApolloClient({
  uri: 'https://me-importas-back-gb3t-dev.fl0.io/graphql',
  //   uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default client;
