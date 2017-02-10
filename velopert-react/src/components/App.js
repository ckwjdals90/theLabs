import React, {Component} from 'react';

import Header from './Header.js'
import Content from './Content.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
