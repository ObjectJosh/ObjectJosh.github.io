import React, { Component } from 'react';
import window_img from "../img/Window.png";

class Window extends Component {
  render() {
    return (
        <div>
            <img src={window_img} alt="Window" className="window"></img>
        </div>
    );
  }
}

export default Window;

