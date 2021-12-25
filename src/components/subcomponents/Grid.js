/* Source: https://codemyui.com/switch-between-mason-grid-and-slider-view/ */
import React, { Component } from 'react';

import '../../assets/css/gridstyle.css'
import singify_img from './singify.png'
import vaxbot_img from './bot.gif'
// import weblock_img from './weblock.png'

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: true,
    }
  }
  handleClick(target) {
    switch(target) {
      case "grid":
        this.setState({
          grid: true,
        })
        break;
      case "carousel":
        this.setState({
          grid: false,
        })
        break;
      default:
        console.error("Something went wrong");
    }
  }
  
  render() {
    const Project = (name, image) => {
      return (
        <p>
          {image ? <img src={image} alt={`${name} Img`}></img> : null} {/*<div className="blank"></div>*/}
          <span></span>
          <span className="short"></span>
          
        </p>
      );
    }

    const renderGallery = () => {
      return (
        <div className="thumbs">  
              {Project("Singify", singify_img)}
              {Project("Covid Vaccine Bot", vaxbot_img)}
              {Project("Weblock", )}
              {Project("Singify", )}
              {Project("Singify", )}
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