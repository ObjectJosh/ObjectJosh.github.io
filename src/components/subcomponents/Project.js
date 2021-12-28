import React, { Component } from 'react';
import plane_large_image from '../../img/Airplane_Large_Written.png';
import photolink from './photolink.png';



class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-focused">
        <div>HEADER</div>
        <div className="grid">
          <div className="content-container left">
            <div className="content-text">
              A "finish the lyrics" game using Spotify, YouTube Transcript, and YouTube Search APIs, coupled with speech recognition and visual machine learning.
            </div>
          </div>
          <img src={photolink} className="content-img"></img>
          <img src={photolink} className="content-img leftimg"></img>
          <div className="content-container right">
            <div className="content-text">
            We used machine learning to detect human poses for raising hands, which we trained using our own recorded pose data. A pose uses a body's position in a live camera feed to set skeletal landmark points, which we used to recognize if your hand is up or not. We used speech recognition to take user voice input and parse the speech through pattern matching, and detect matches with the corresponding song lyrics.
            </div>
          </div>
        </div>
        <div>FOOTER</div>
      </div>
    );
  }
}

export default Project;
