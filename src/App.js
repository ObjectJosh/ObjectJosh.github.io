import React, { Component } from 'react';

// Components
import Background from './components/Background';
import Desk from './components/Desk';
import Computer from './components/Computer';
import Shelf from './components/Shelf';
import Window from './components/Window';
import Banner from './components/Banner';


// Includes
import './Assets/css/default.min.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComputer: false,
    }
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(target) {
    console.log(target);
    switch(target) {
      case "opaque":
        this.setState({
          showComputer: false,
        }, () => {
        });
        break;
      case "computer":
        this.setState({
          showComputer: true,
        }, () => {
          // renderOpaque();
          console.log(this.state.show);
          console.log(target)
          
        });
        break;
      default:
        // pass
      
    }
  }
  

  render() {
    // Components
    const renderOpaque = () => {
      return (
        <div className="opaque" onClick={() => this.clickEvent("opaque")}>
          {console.log("showing")}
        </div>
      );
    }


    // Main Component
    return (
      <div className="App">
        <Background></Background>
        <Desk clickHandler={() => this.clickEvent("computer")}></Desk>
        <Shelf></Shelf>
        <Window></Window>
        <Banner></Banner>
        {this.state.showComputer ? renderOpaque() : null}
        {this.state.showComputer ? <Computer></Computer> : null}
      </div>
    );
  }
}

export default App;
