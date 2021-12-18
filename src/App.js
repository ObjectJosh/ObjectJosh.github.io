import React, { Component } from 'react';

// Components
import Background from './components/Background';

// Includes
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background></Background>
      </div>
    );
  }
}

export default App;
