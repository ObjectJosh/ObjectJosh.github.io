import React, { Component } from 'react';
import desk_img from '../img/Desk_Items.png';
import desk from '../img/Desk.png';
import computer_img from '../img/Computer.png';
import mouse_img from '../img/Mouse.png';
import rock_img from '../img/Rock.png';

class Desk extends Component {
  constructor(props) {
    super(props);
    // console.log("props:");
    // console.log(this.props.onClickCallback);
    // this.handleClick = this.ha
    this.state = {
      showComputer: false,
      circle: false,
    }
    // this.clickHandler = this.clickHandler.bind(this);
    // this.props.onClick = this.props.onClick.bind(this);
  }
  /*
  clickHandler(target) {
    if (target == "computer") {
      this.setState({
        showComputer: true,
      }, () => {
        // renderOpaque();
        console.log(this.state.showComputer);
        console.log(target)
      });
    }
  }*/
  handleEvent(event, bool=true) {
    if (event == "circle") {
      this.setState({
        circle: bool,
      }, () => {
      });
    }
  }

  
  render() {
    return (
        <div className="region-desk">
            {/* <img src={desk_img} alt="Desk" class="desk"></img> */}
            <img src={desk} alt="Desk" className="desk"></img>
            <img src={computer_img} alt="Computer" className="computer clickable" onClick={this.props.clickHandler}></img>
            <img src={mouse_img} alt="Mouse" className={`mouse ${this.state.circle ? "circle" : ""}`} onMouseOver={() => this.handleEvent("circle", true)} onAnimationEnd={() => this.handleEvent("circle", false)}></img>
            <img src={rock_img} alt="Rock" className="rock"></img>
        </div>
    );
  }
}




export default Desk;

