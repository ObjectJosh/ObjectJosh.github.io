import React, { Component } from 'react';
import banner_img from "../img/Banner.png";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      animating: false
    }
  }
  handleClick() {
    window.open("https://www.calpoly.edu/", "_blank");
  }
  render() {
    return (
      <img src={banner_img} alt="Banner"
        className={`banner clickable ${this.state.animating ? "tilt" : ""}`}
        onClick={() => this.handleClick()}
        onMouseOver={() => this.setState({ animating: true })}
        onAnimationEnd={() => this.setState({ animating: false })}
        >
      </img>
    );
  }
}

export default Banner;

