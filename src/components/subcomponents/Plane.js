import React, { Component } from 'react';
import plane_large_image from '../../img/Airplane_Large_Written.png';
// import google_logo_img from '../img/Google_Logo.png';
// import Grid from './Grid';


class Plane extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.state = {
    //   showHome: true,
    //   showAll: false,
    // }
  }
//   handleClick(target) {
//     // alert("clicked")
//     switch(target) {
//       case "all":
//         this.setState({
//           showHome: false,
//           showAll: true,
//         })
//         break;
//     }
//   }
  render() {
    const renderForm = () => {
      return (
        <div className="form-region">
          {/* <img src={plane_large_image} alt="Google Logo" className="google"></img> */}
          {/* <h1 className="form-header">Shoot me a message!</h1> */}
          {/* <div className="form-content"> */}
            {/* <input type="text" className="input-handwriting" placeholder="Full Name"></input> */}
          {/* </div> */}
        </div>
      );
    }
    // const renderPortfolio = () => {

    // }
    return (
      <div className="plane-region">
        <img src={plane_large_image} alt="Plane" className="plane-close"></img>
        {renderForm()}
      </div>
    );
  }
}


export default Plane;

