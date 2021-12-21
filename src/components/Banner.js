import React, { Component } from 'react';
import banner_img from "../img/Banner.png";

class Banner extends Component {
  render() {
    return (
        <div>
            <img src={banner_img} alt="Banner" className="banner"></img>
        </div>
    );
  }
}

export default Banner;

