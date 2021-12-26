import React, { Component } from 'react';
import desk_img from '../img/Desk.png';
import computer_img from '../img/Computer.png';
import mouse_img from '../img/Mouse.png';
import rock_img from '../img/Rock.png';
import cup_img from '../img/Cup.png';
import hello_bot_foot_img from '../img/Hello_Bot_Foot.png';
import hello_bot_img from '../img/Hello_Bot.png';
import hello_bot_hand_img from '../img/Hello_Bot_Hand.png';


class Desk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComputer: false,
      circle: false,
      cup: false,
      botAnimation: false,
      showBot: false, // Condition to call animation: fadeIn and fadeOut
      show: false, // Final condition for bot to be rendered in or not
      cycleComplete: false,
      animationCounter: 0,
    }
  }
  handleEvent(event, bool=true) {
    switch(event) {
      case "circle":
        this.setState({ circle: bool });
        break;
      case "cup":
        this.handleCupEvent(bool);
        break;
      case "botAnimation":
        this.handleBotAnimation(bool);
        break;
      default:
        console.error("Something went wrong");
    }
  }

  handleCupEvent(bool) {
    if (!bool) { // Stage 2: cup is unhovered
      this.setState({ cup: false });
      if (this.state.animationCounter > 1) {
        this.setState({
          showBot: false,
          animationCounter: 0,
          cycleComplete: true,
        });
      } else if (!this.state.showBot) { // Fade out
        this.setState({
          showBot: false,
          cycleComplete: true,
        });
      } else if (this.state.animationCounter === 0) { // No animations occurred
        this.setState({ showBot: true });
      }
    // Stage 1: cup is hovered
    } else if (!this.state.showBot) { // Once we hide the bot, reset our state
      this.setState({
        cup: true,
        showBot: true,
        show: true,
        // Reset other state components below
        showComputer: false,
        circle: false,
        botAnimation: false,
        animationCounter: 0,
        cycleComplete: false,
      });
    }
  }

  handleBotAnimation(bool) {
    if (this.state.animationCounter >= 2) { // Clear animation counter
      this.setState({ animationCounter: 0 });
    }
    if (!bool) {
      if (!this.state.showBot) { // Full cycle completed. Send state to reset
        this.setState({ show: false });
      }
      this.setState({ animationCounter: this.state.animationCounter + 1 }, () => {
        if (this.state.animationCounter === 2) { // Full cycle complete
          this.state.cup ? this.setState({ cycleComplete: true }) : this.setState({ cycleComplete: true, showBot: false, animationCounter: 0 });
        }
      });
    }
  }

  handleClick(target) {
    switch(target) {
      case "hello world":
        window.open("https://youtu.be/Yw6u6YkTgQ4", "_blank");
        break;
      default:
        console.error("Something went wrong");
    }
  }
  
  render() {
    const renderBot = () => {
      return (
        <div>
          <img src={hello_bot_foot_img} alt="Hello World Bot Left Foot"
            className={`bot-foot foot-left clickable ${this.state.showBot ? "sway" : "fadeOut"}`}
            onClick={() => this.handleClick("hello world")}
            >
          </img>
          <img src={hello_bot_foot_img} alt="Hello World Bot Right Foot"
            className={`bot-foot foot-right clickable ${this.state.showBot ? "sway" : "fadeOut"}`}
            onClick={() => this.handleClick("hello world")}
            >
          </img>
          <img src={hello_bot_img} alt="Hello World Bot"
            className={`bot clickable ${(this.state.showBot) ? "sway" : "fadeOut"}`}
            onAnimationStart={() => this.handleEvent("botAnimation", true)}
            onClick={() => this.handleClick("hello world")}
            >
          </img>
        </div>
      );
    }

    const renderBotHands = () => {
      return (
        <div>
          <img src={hello_bot_hand_img} alt="Hello World Bot Left Hand"
            className={`bot-hand hand-left clickable ${this.state.showBot ? "sway" : "fadeOut"}`}
            onClick={() => this.handleClick("hello world")}
            >
          </img>
          <img src={hello_bot_hand_img} alt="Hello World Bot Right Hand"
            className={`bot-hand hand-right clickable ${this.state.showBot ? "sway" : "fadeOut"}`}
            onAnimationEnd={() => this.handleEvent("botAnimation", false)}
            onClick={() => this.handleClick("hello world")}
            >
          </img>
        </div>
      );
    }

    const renderMouse = () => {
      return (
        <img src={mouse_img} alt="Mouse"
          className={`mouse ${this.state.circle ? "circle" : ""}`}
          onMouseOver={() => this.handleEvent("circle", true)}
          onAnimationEnd={() => this.handleEvent("circle", false)}
          >
        </img>
      );
    }


    const renderCup = () => {
      return (
        <img src={cup_img} alt="Cup" className="cup clickable"
          onMouseOver={() => this.handleEvent("cup", true)}
          onMouseOut={() => this.handleEvent("cup", false)}
          onClick={() => this.handleClick("hello world")}
          >
        </img>
      );
    }

    return (
        <div className="region-desk">
            <img src={desk_img} alt="Desk" className="desk"></img>
            <img src={computer_img} alt="Computer" className="computer clickable" onClick={this.props.clickHandler}></img>
            {renderMouse()}
            <img src={rock_img} alt="Rock" className="rock"></img>
            {this.state.show ? renderBot() : null}
            {renderCup()}
            {this.state.show ? renderBotHands() : null}
        </div>
    );
  }
}

export default Desk;
