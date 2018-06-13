import React, { Component } from 'react';
import Auxillary from './hoc/Auxillary';
import Main from './container/Main';

class App extends Component {
  render() {
    return (
      <Auxillary>
        <Main />
      </Auxillary>
    );
  }
}

export default App;
