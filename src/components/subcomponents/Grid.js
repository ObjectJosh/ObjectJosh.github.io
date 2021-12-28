/* Source: https://codemyui.com/switch-between-mason-grid-and-slider-view/ */
import React, { Component } from 'react';

import '../../assets/css/gridstyle.css';
import singify_img from './singify.png';
import vaxbot_img from './bot.gif';
// import weblock_img from './weblock.png'
import photolink_img from './photolink.png';
import scoop_img from './scoop.png';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.state = {
      grid: true,
      hoverCard: false,
      projectFocused: false,
    }
  }
  handleClick(target, name="") {
    switch(target) {
      case "grid":
        this.setState({
          grid: true,
        });
        break;
      case "carousel":
        this.setState({
          grid: false,
        });
        break;
      case "project":
        this.setState({
          projectFocused: name,
        });
        break;
      default:
        console.error("Something went wrong");
    }
  }

  handleEvent(event, target, state=true) {
    switch(event) {
      case "hoverCard":
        state ? this.setState({ hoverCard: target }) : this.setState({ hoverCard: state})
        break;
      default:
        console.error("Something went wrong");
    }
  }
  
  render() {
    const Project = (name, image) => {
      return (
        <div className="card"
          onMouseOver={() => this.handleEvent("hoverCard", name)}
          // onClick={() => this.handleClick("project", name)}
          onClick={this.props.clickHandler}
          >
            <img src={image} alt={`${name} Img`}></img>
          <h1>{name}</h1> {/* Renders on card hover */}
        </div>
      );
    }

    const BlankProject = () => {
      return (
        <div className="card blank"></div>
      );
    }

    const renderGallery = () => {
      return (
        <div className="thumbs">  
          {Project("Singify", singify_img)}
          {Project("Vaxbot", vaxbot_img)}
          {Project("PhotoLink", photolink_img)}
          {Project("Scoop", scoop_img)}
          {BlankProject()}
          {/* {Project("Scoop", scoop_img)} */}
          {/* {Project("Scoop", scoop_img)} */}
          {/* {Project("Other", singify_img)} */}
        </div>
      );
    }

    const renderProjectFocused = (name) => {
      return (
        <div className="project-focused">
          hello world {name}
        </div>
      );
    }

    const renderCarousel = () => {
      return (
        <div id="carousel">
              <div className="innerCarousel">
                  <div>
                      
                  </div>
                  <div>
                      <p className="current">
                          <span></span>
                          <span className="short"></span>
                      </p>
                  </div>
                  <div>
                      <p>
                          <span></span>
                          <span className="short"></span>
                      </p>
                  </div>
                  <div>    
                      <p>
                          <span></span>
                          <span className="short"></span>
                      </p>
                  </div>
                  <div>
                      <p>
                          <span></span>
                          <span className="short"></span>
                      </p>
                  </div>
                  <div>    
                      <p>
                          <span></span>
                          <span className="short"></span>
                      </p>
                  </div>
                  <div>    
                      <p>
                          <span></span>
                          <span className="short"></span>
                      </p>
                  </div>
              </div>
          </div>
      );
    }


    const renderGrid = () => {
      return (
        <div id="grid">
          <div id="grid-selector">
              <div id="viewCarousel" onClick={() => this.handleClick("carousel")} className={!this.state.grid ? "active" : null}></div>
              <div id="viewGrid" onClick={() => this.handleClick("grid")} className={this.state.grid ? "active" : null}>
                <p></p>
                <p></p>
                <p></p>
                <p></p>            
              </div>
          </div>
          
          <div id="headline">
              <p></p>
              <p className="short"></p>
          </div>

          {this.state.grid ? renderGallery() : renderCarousel()}
          {this.state.projectFocused ? renderProjectFocused(this.state.projectFocused) : null}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        </div>
      );
    }
    return (
        renderGrid()
    );
  }
}

export default Grid;