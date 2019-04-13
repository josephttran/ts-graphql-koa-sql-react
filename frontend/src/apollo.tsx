import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { environment } from './environment';
import Routes from './routes/routes';

class Apollo extends Component {
  client = new ApolloClient({ uri: environment.api });

  render() {
    return (
      <ApolloProvider client={this.client}>
        <Routes></Routes>
      </ApolloProvider>
    )
  }
}

export default Apollo;