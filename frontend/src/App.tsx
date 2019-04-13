import React from 'react';

import './App.css';
import Apollo from './apollo';

class App extends React.Component {
  isAuthenticated = false;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          TypeScript React GraphQL
        </header>
        <Apollo></Apollo>
      </div>
    );
  }
}

export default App;
