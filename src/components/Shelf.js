import React, { Component } from 'react';
import shelf_img from "../img/Shelf.png";

class Shelf extends Component {
  render() {
    return (
        <div>
            <img src={shelf_img} alt="Shelf" className="shelf"></img>
        </div>
    );
  }
}

export default Shelf;

