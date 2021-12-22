import React, { Component } from 'react';
import construction_img from '../img/Under_Construction.png';

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="splash">
          <div className="splash-content">
            <img className="constructionimg" src={construction_img}></img>
            <ul>
              <li>
                <button className="splash-continue" onClick={this.props.clickHandler}>Continue</button>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Splash;

