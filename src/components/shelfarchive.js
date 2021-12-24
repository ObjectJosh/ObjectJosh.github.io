import React, { Component } from 'react';
import shelf_img from "../img/Shelf.png";
import books_img from "../img/Books.png";
import plane_img from "../img/Airplane.png";
import linkedin_img from "../img/LinkedIn.png";
import github_img from "../img/GitHub.png";
import gmail_img from "../img/Gmail.png";
import gmail_clipboard_img from "../img/Gmail_Clipboard.png";
import gmail_clipboard_bold_img from "../img/Gmail_Clipboard_Bold.png";
import clipboard_message_img from "../img/Clipboard_Message.png";

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showPlane: false,
      fade: 0,
      linkedin: {
        hovering: false,
        animating: false,
      },
      github: false,
      gmail: false,
    }
  }
  handleClick(target) {
    // alert("clicked")
    switch(target) {
      case "linkedin":
        window.open("https://www.linkedin.com/in/-joshuawong/", "_blank");
        break;
      case "github":
        window.open("https://github.com/ObjectJosh", "_blank");
        break;
      case "gmail":
        navigator.clipboard.writeText("joshwong74@gmail.com");
        this.setState({ fade: true })
        break;
    }
  }

  handleEvent(type, bool=true, property=null) {
    switch(type) {
      case "animation end":
        this.setState({ fade: false })
        break;
      case "linkedin":
        if (property == "hovering") {
          if (bool) {
          this.setState({
            linkedin: {
              hovering: true
            }
          })
          } else {
            this.setState({
              linkedin: {
                hovering: false
              }
            })
          }
        } else if (property == "animating") {
          // alert(property + " is animating" + bool)
          if (bool) {
            this.setState({
              linkedin: {
                animating: true
              }
            })
            } else {
              this.setState({
                linkedin: {
                  animating: false
                }
              })
            }
        }
        
        break;
      case "github":
        this.setState({ "github": bool })
        break;
      case "gmail":
        this.setState({ "gmail": bool })
        break;
      case "linkedinAnimation":
        this.setState({ "linkedinAnimation": bool })
    }
  }

  render() {
    const renderBoxItem = (name, altname, img, state) => {
      return (
        <img
          src={img}
          alt={altname}
          className={`shelf-item clickable static ${name} ${state ? "bounce" : ""}`}
          onClick={() => this.handleClick(name)}
          onMouseOver={() => this.handleEvent(name, true, "hovering")}
          onMouseOut={() => this.handleEvent(name, false, "hovering")}
          onAnimationStart={() => this.handleEvent(name, true, "animating")}
          onAnimationEnd={() => this.handleEvent(name, false, "animating")}
          >
        </img>
      );
    }

    const renderHoverBoxItem = (name, altname, img, state) => {
      return (
        <img
          src={img}
          alt={altname}
          className={`shelf-item clickable static ${name} ${state ? "bounce" : ""}`}
          onClick={() => this.handleClick(name)}
          onMouseOver={e => (this.handleEvent(name, true), e.currentTarget.src = gmail_clipboard_bold_img)}
          onMouseOut={e => (this.handleEvent(name, false), e.currentTarget.src = gmail_img)}
          >
        </img>
      );
    }

    return (
        <div className="shelf-container">
          {/* on animation end set state to done animating
              on off hover set state to done hovering
              on animation end && hover state off, then change class
          */}
            <img src={shelf_img} alt="Shelf" className="shelf"></img>
            <img src={books_img} alt="Books" className="shelf-item books"></img>
            <img src={plane_img} alt="Plane" className="shelf-item clickable plane" onClick={this.props.clickHandler}></img>
            {console.log(this.state.linkedin["animating"])}
            {renderBoxItem("linkedin", "LinkedIn", linkedin_img, (this.state.linkedin["hovering"] || this.state.linkedin["hovering"] == null) || (this.state.linkedin["animating"] || this.state.linkedin["animating"] == null))}
            {renderBoxItem("github", "GitHub", github_img, this.state.github)}
            {renderHoverBoxItem("gmail", "Gmail", gmail_img, this.state.gmail)}
            {this.state.fade ? <img src={clipboard_message_img} alt="Clipboard Message" className="shelf-item message" onAnimationEnd={() => this.handleEvent("animation end")} fade={this.state.fade}></img> : null}
        </div>
    );
  }
}

export default Shelf;