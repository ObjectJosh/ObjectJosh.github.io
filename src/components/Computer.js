import React, { Component } from 'react';
import computer_close_img from '../img/Computer_Close.png';
import google_logo_img from '../img/Google_Logo.png';
import Grid from './subcomponents/Grid';


class Computer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showHome: true,
      showAll: false,
    }
  }
  handleClick(target) {
    // alert("clicked")
    switch(target) {
      case "all":
        this.setState({
          showHome: false,
          showAll: true,
        })
        break;
      default:
        console.error("Something went wrong");
    }
  }
  render() {
    const renderHome = () => {
      return (
        <div>
          <img src={google_logo_img} alt="Google Logo" className="google"></img>
          <input type="text" className="input-bubble" placeholder="Search my portfolio or explore"></input>
          <div className="button-container">
            <button className="button button-left">Google Search</button>
            <button className="button button-right" onClick={() => this.handleClick("all")}>I'm Feeling Explorative</button>
          </div>
        </div>
      );
    }
    // const renderPortfolio = () => {

    // }
    return (
      <div className="computer-region">
        <img src={computer_close_img} alt="Computer" className="computer-close"></img>
        <div className="computer-screen">
          {this.state.showHome ? renderHome() : null}
          {this.state.showAll ? <Grid></Grid> : null}
        </div>
      </div>
    );
  }
}

export default Computer;

