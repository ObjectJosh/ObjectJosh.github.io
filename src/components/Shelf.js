import React, { Component } from 'react';
import shelf_img from "../img/Shelf.png";
import books_img from "../img/Books.png";
import plane_img from "../img/Airplane.png";
import linkedin_img from "../img/LinkedIn.png";
import github_img from "../img/GitHub.png";
import gmail_img from "../img/Gmail.png";

class Shelf extends Component {
  render() {
    return (
        <div className="shelf-container">
            <img src={shelf_img} alt="Shelf" className="shelf"></img>
            <img src={books_img} alt="Books" className="shelf-item books"></img>
            <img src={plane_img} alt="Plane" className="shelf-item plane"></img>
            <img src={linkedin_img} alt="LinkedIn" className="shelf-item linkedin"></img>
            <img src={github_img} alt="GitHub" className="shelf-item github"></img>
            <img src={gmail_img} alt="Gmail" className="shelf-item gmail"></img>
        </div>
    );
  }
}

export default Shelf;

