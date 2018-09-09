import React, { Component } from "react";
import "./Polaroid.css";
import ProfilePhoto from "./Profile.png";

class Polaroid extends Component {
  state = {
    flashActive: false
  };
  render() {
    return (
      <div className="Container">
        <div className={this.state.flashActive ? "flash" : ""} />
        <div className={this.state.flashActive ? "WrapperLeft" : "Wrapper"}>
          <div className="redDot" />
          <div className="flashLight">
            <div className="innerFlash" />
          </div>
          <button
            className="fireButton"
            onClick={() => {
              this.setState({ flashActive: !this.state.flashActive });
            }}
          >
            {" "}
          </button>
          <button className="fireButtonShadow"> </button>
          <div className="firstLine" />
          <div className="secondLine" />
          <div className="thirdLine" />
          <div className="fourthLine" />
          <div className="fifthLine" />
          <div className="sixthLine" />
          <div className="Objective">
            <div className="firstLayer">
              <div className="secondLayer">
                <div className="thirdLayer">
                  <div className="fourthLayer">
                    <div className="fifthLayer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Shadow" />
        <div className={this.state.flashActive ? "profileRight" : "profile"}>
          <img
            className={this.state.flashActive ? "image" : "showImage"}
            src={ProfilePhoto}
            alt="That's my face :)"
          />
          <div className={this.state.flashActive ? "photo" : "photoShow"} />
          <h1 className="first">Hello, I'm Manuel :)</h1>
          <h1 className="second">I'm a Full-Stack developer</h1>
          <h1 className="third">Click me :)</h1>
        </div>
      </div>
    );
  }
}

export default Polaroid;
