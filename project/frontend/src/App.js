import React, { Component } from 'react';
import Aux from './hoc/Aux';
import Main from './container/Main';

class App extends Component {
  render() {
    return (
      <Aux>
        <Main />
      </Aux>
    );
  }
}

export default App;
