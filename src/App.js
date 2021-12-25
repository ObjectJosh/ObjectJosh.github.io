import React, { Component } from 'react';

// Components
import Splash from './components/Splash';
import Background from './components/Background';
import Desk from './components/Desk';
import Computer from './components/Computer';
import Shelf from './components/Shelf';
import Window from './components/Window';
import Banner from './components/Banner';
import Plane from './components/subcomponents/Plane';

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
    }
  }

  updateEvent(target, bool) {
    switch(target) {
      case "plane-submit":
        this.setState({ showPlaneSubmit: bool });
        break;
    }
  }

  render() {
    // Components
    const renderExitButton = () => {
      return (
        <img src={exit_img} className="exit clickable" onClick={() => this.clickEvent("opaque")}></img> 
      );
    }


    // Main Component
    return (
      <div className="App">
        {this.state.showSplash ? <Splash clickHandler={() => this.clickEvent("continue")}></Splash> : null}
        <Background></Background>
        <Desk clickHandler={() => this.clickEvent("computer")}></Desk>
        <Shelf clickHandler={() => this.clickEvent("plane")}></Shelf>
        <Window></Window>
        <Banner></Banner>
        {this.state.showOpaque ? <div className="opaque"></div> : null}
        {this.state.showComputer ? <Computer></Computer> : null}
        {this.state.showPlane ? <Plane showElement={e => this.updateEvent("plane-submit", e)}></Plane> : null}
        {this.state.showPlane && this.state.showPlaneSubmit ? <button className="button-plane-submit">Send</button> : null}
        {/* <button className="button-plane-submit">Send</button> */}
        {this.state.showOpaque ? renderExitButton() : null}
      </div>
    );
  }
}

export default App;
