import React, { Component } from 'react';
import shelf_img from "../img/Shelf.png";
import books_img from "../img/Books.png";
import plane_img from "../img/Airplane.png";
import linkedin_img from "../img/LinkedIn.png";
import github_img from "../img/GitHub.png";
import gmail_img from "../img/Gmail.png";

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showPlane: false,
    }
  }
  handleClick(target) {
    // alert("clicked")
    switch(target) {
      case "plane":
        this.setState({
          showPlane: true,
        });
        break;
    }
  }
  render() {
    return (
        <div className="shelf-container">
            <img src={shelf_img} alt="Shelf" className="shelf"></img>
            <img src={books_img} alt="Books" className="shelf-item books"></img>
            <img src={plane_img} alt="Plane" className="shelf-item clickable plane" onClick={this.props.clickHandler}></img>
            <img src={linkedin_img} alt="LinkedIn" className="shelf-item clickable linkedin" onClick={() => this.handleClick("linkedin")}></img>
            <img src={github_img} alt="GitHub" className="shelf-item clickable github" onClick={() => this.handleClick("github")}></img>
            <img src={gmail_img} alt="Gmail" className="shelf-item clickable gmail" onClick={() => this.handleClick("gmail")}></img>
        </div>
    );
  }
}

export default Shelf;