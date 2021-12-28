import React, { Component } from 'react';

// Components
import Splash from './components/Splash';
import Desk from './components/Desk';
import Computer from './components/Computer';
import Shelf from './components/Shelf';
import Window from './components/Window';
import Banner from './components/Banner';
import Plane from './components/subcomponents/Plane';
import Project from './components/subcomponents/Project';

// Includes
import './assets/css/default.min.css'
import exit_img from './img/Exit.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
      showOpaque: false,
      showComputer: false,
      showPlane: false,
      projectFocused: false,
    }
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(target) {
    switch(target) {
      case "continue":
        this.setState({ showSplash: false });
        break;
      case "opaque":
        this.setState({ showOpaque: false, showComputer: false, showPlane: false });
        break;
      case "computer":
        this.setState({ showComputer: true }, () => { this.setState({ showOpaque: true }) });
        break;
      case "plane":
        this.setState({ showPlane: true }, () => { this.setState({ showOpaque: true }) });
        break;
      case "projectFocused":
        this.setState({ projectFocused: true });
        break;
      default:
        console.error("Something went wrong");
    }
  }

  updateEvent(target, bool) {
    switch(target) {
      case "plane-submit":
        this.setState({ showPlaneSubmit: bool });
        break;
      default:
        console.error("Something went wrong");
    }
  }

  render() {
    // Components
    const renderExitButton = () => {
      return (
        <img src={exit_img} alt="Close Button" className="exit clickable" onClick={() => this.clickEvent("opaque")}></img> 
      );
    }


    // Main Component
    return (
      <div className="App">
        {/* {this.state.showSplash ? <Splash clickHandler={() => this.clickEvent("continue")}></Splash> : null} */}
        <Desk clickHandler={() => this.clickEvent("computer")}></Desk>
        <Shelf clickHandler={() => this.clickEvent("plane")}></Shelf>
        <Window></Window>
        <Banner></Banner>
        {this.state.showOpaque ? <div className="opaque"></div> : null}
        {this.state.showComputer ? <Computer clickHandler={() => this.clickEvent("projectFocused")}></Computer> : null}
        {this.state.showPlane ? <Plane showElement={e => this.updateEvent("plane-submit", e)}></Plane> : null}
        {this.state.showPlane && this.state.showPlaneSubmit ? <button className="button-plane-submit">Send</button> : null}
        {/* <button className="button-plane-submit">Send</button> */}
        {this.state.showOpaque ? renderExitButton() : null}
        {this.state.projectFocused ? <Project></Project> : null}
        {/* <Project></Project> */}
      </div>
    );
  }
}

export default App;
