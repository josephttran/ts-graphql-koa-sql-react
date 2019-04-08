import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import { environment } from './environment';
import Home from './components/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import NotFound from './components/NotFound';

class App extends React.Component {
  client = new ApolloClient({ uri: environment.api });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          TypeScript React GraphQL
        </header>
        <ApolloProvider client={this.client}>
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
