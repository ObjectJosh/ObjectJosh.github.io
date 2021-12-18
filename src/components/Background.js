// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';

class Background extends Component {
  render() {
    return (
      <header>hello from the background
          <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
}

export default Background;

