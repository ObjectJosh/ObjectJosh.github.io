import React, { Component } from 'react';
import banner_img from "../img/Banner.png";

class Banner extends Component {
  handleClick() {
    window.open("https://www.calpoly.edu/", "_blank");
  }
  render() {
    return (
      <img src={banner_img} alt="Banner" className="banner clickable" onClick={() => this.handleClick()}></img>
    );
  }
}

export default Banner;

