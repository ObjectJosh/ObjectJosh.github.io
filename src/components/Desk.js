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
    if (event == "circle") {
      this.setState({ circle: bool });
    } else if (event == "cup") {
      if (bool != true) { // Stage 2: cup is unhovered
        this.setState({ cup: false });
        if (this.state.animationCounter === 2 || this.state.animationCounter > 1) {
          this.setState({
            showBot: false,
            animationCounter: 0,
            cycleComplete: true,
          });
        } else if (this.state.showBot != true || this.state.animationCounter == 2) { // Fade out
          this.setState({
            showBot: false,
            cycleComplete: true,
          });
        } else if (this.state.animationCounter == 0) { // No animations occurred
          this.setState({ showBot: true });
        }
      } else { // Stage 1: cup is hovered
        if (!this.state.showBot) { // Once we hide the bot, reset our state
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
    } else if (event == "botAnimation") {
      if (!bool && this.state.animationCounter == 0 && this.state.showBot != true && this.state.cycleComplete) {
          this.setState({ show: false });
      }
      if (this.state.showBot != true && bool != true && this.state.cycleComplete) {
        this.setState({ // Full cycle completed. Send state to reset
          show: false,
          cycleComplete: true,
        });
      }
      if (this.state.animationCounter >= 2) { // Clear animation counter
        this.setState({ animationCounter: 0, });
      }
      if (bool != true) {
        this.setState({
          animationCounter: this.state.animationCounter + 1,
        }, () => {
          if (this.state.animationCounter === 2) { // Full cycle complete
            if (this.state.cup) {
              this.setState({ cycleComplete: true })
            } else {
              this.setState({ cycleComplete: true, showBot: false })
            }
          }
        });
      }
      if (this.state.cup != true && this.state.animationCounter >= 2 && bool != true) {
        this.setState({ showBot: false, animationCounter: 0 });
      }
    }
  }
  
  render() {
    const renderBot = () => {
      return (
        <div>
        <img src={hello_bot_foot_img} alt="Hello World Bot Left Foot" className={`bot-foot foot-left ${this.state.showBot ? "sway" : ""} ${!this.state.showBot ? "fadeOut" : ""}`}></img>
        <img src={hello_bot_foot_img} alt="Hello World Bot Right Foot" className={`bot-foot foot-right ${this.state.showBot ? "sway" : ""} ${!this.state.showBot ? "fadeOut" : ""}`}></img>
        <img src={hello_bot_img} alt="Hello World Bot" className={`bot ${(this.state.showBot) ? "sway" : ""} ${!this.state.showBot ? "fadeOut" : ""}`}
          onAnimationStart={() => this.handleEvent("botAnimation", true)}
          >
        </img>
        </div>
      );
    }

    const renderBotHands = () => {
      return (
        <div>
          <img src={hello_bot_hand_img} alt="Hello World Bot Left Hand" className={`bot-hand hand-left ${this.state.showBot ? "sway" : ""} ${!this.state.showBot ? "fadeOut" : ""}`}></img>
          <img src={hello_bot_hand_img} alt="Hello World Bot Right Hand" className={`bot-hand hand-right ${this.state.showBot ? "sway" : ""} ${!this.state.showBot ? "fadeOut" : ""}`}
              onAnimationEnd={() => this.handleEvent("botAnimation", false)}
            >
          </img>
        </div>
      );
    }

    return (
        <div className="region-desk">
            <img src={desk_img} alt="Desk" className="desk"></img>
            <img src={computer_img} alt="Computer" className="computer clickable" onClick={this.props.clickHandler}></img>
            <img src={mouse_img} alt="Mouse" className={`mouse ${this.state.circle ? "circle" : ""}`} onMouseOver={() => this.handleEvent("circle", true)} onAnimationEnd={() => this.handleEvent("circle", false)}></img>
            <img src={rock_img} alt="Rock" className="rock"></img>
            {this.state.show ? renderBot() : null}
            <img src={cup_img} alt="Cup" className="cup"
              onMouseOver={() => this.handleEvent("cup", true)}
              onMouseOut={() => this.handleEvent("cup", false)}
              >
            </img>
            {this.state.show ? renderBotHands() : null}
        </div>
    );
  }
}




export default Desk;

