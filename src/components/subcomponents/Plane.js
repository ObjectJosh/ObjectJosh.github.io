import React, { Component } from 'react';
import plane_large_image from '../../img/Airplane_Large_Written.png';


class Plane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }
  handleClick(target) {
    switch(target) {
      case "submit":
        // alert(this.state.name)
        break;
    }
  }

  handleChange(target, value) {
    this.props.showElement(false);
    switch(target) {
      case "name":
        this.setState({ name: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "message":
        this.setState({ message: value });
        break;
      default:
        alert("Something went wrong");
    }
  }

  handleBlur() {
    if (this.state.name && this.state.email && this.state.message) {
      if (!this.state.name.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
        alert("Please enter a valid name")
      } else if (!this.state.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        alert("Please enter a valid email")
      } else {
        this.props.showElement(true);
      }
      // alert("all good");
    }
  }

  render() {
    const renderNameField = () => {
        return (
            <input
                type="text"
                className="input-handwriting"
                placeholder="Full Name"
                style={{ fontSize: "2.5vh" }}
                maxLength="30"
                value={this.state.name}
                onInput={(e) => this.handleChange("name", e.target.value)}
                onBlur={() => this.handleBlur()}
                >
            </input>
        );
    }

    const renderEmailField = () => {
        return (
            <input
                type="text"
                className="input-handwriting"
                placeholder="Email"
                style={{ marginTop: "0px" }}
                maxLength="50"
                value={this.state.email}
                onInput={(e) => this.handleChange("email", e.target.value)}
                onBlur={() => this.handleBlur()}
                >
            </input>
        );
    }

    const renderMessageField = () => {
        return (
            <textarea
                type="text"
                className="input-handwriting"
                placeholder="Message"
                style={{ marginTop: "70px" }}
                wrap="hard"
                rows="6"
                cols="50"
                maxLength="300"
                value={this.state.message}
                onInput={(e) => this.handleChange("message", e.target.value)}
                onBlur={() => this.handleBlur()}
                >
            </textarea>
        );
    }

    const renderForm = () => {
      return (
        <div className="form-region">
          <div className="form-content">
            {renderNameField()}
            {renderEmailField()}
            {renderMessageField()}
            {/* <button className="form-content" onClick={() => this.handleClick("submit")}>checking</button> */}
          </div>
        </div>
      );
    }
    // const renderPortfolio = () => {

    // }
    return (
      <figure className="plane-region">
        <img src={plane_large_image} alt="Plane" className="plane-close"></img>
            {renderForm()}
      </figure>
    );
  }
}

export default Plane;
