import React, { Component } from "react";
import "./Polaroid.css";
import { SocialIcon } from "react-social-icons";

class Polaroid extends Component {
  state = {
    flashActive: false,
    rotate: false,
    backCardPlacer: 0
  };
  render() {
    var BackCardWrapper = "";
    var FirstBackText = "";
    var SecondBackText = "";
    if (this.state.rotate && this.state.flashActive) {
      BackCardWrapper = "backCard";
      FirstBackText = "firstBack";
      SecondBackText = "secondBack";
    } else if (!this.state.rotate && this.state.flashActive) {
      if (this.state.backCardPlacer === 1) {
        BackCardWrapper = "hiddenBackCardRight";
      } else {
        BackCardWrapper = "hiddenBackCard";
      }
      FirstBackText = "hiddenFirstBack";
      SecondBackText = "hiddenSecondBack";
    } else if (!this.state.rotate && !this.state.flashActive) {
      BackCardWrapper = "hidden";
      FirstBackText = "hidden";
      SecondBackText = "hidden";
    }

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
              this.setState({
                flashActive: !this.state.flashActive,
                rotate: false,
                backCardPlacer: 1
              });
            }}
          >
            Press
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
        <div
          className={this.state.flashActive ? "profileRight" : "profile"}
          id={this.state.rotate ? "rotateCard" : "normalCard"}
          onClick={() => {
            this.setState({
              rotate: !this.state.rotate,
              backCardPlacer: this.state.backCardPlacer + 1
            });
          }}
        >
          <div className={this.state.flashActive ? "image" : "showImage"} />
          <div className={this.state.flashActive ? "photo" : "photoShow"} />
          <h1 className="first">Hello, I'm Manuel :)</h1>
          <h1 className="second">A Full-Stack developer</h1>
          <h1 className="third">Tap :)</h1>
        </div>
        <div
          className={BackCardWrapper}
          onClick={() => {
            this.setState({
              rotate: !this.state.rotate,
              backCardPlacer: this.state.backCardPlacer + 1
            });
          }}
        >
          <h1 className={FirstBackText}>
            Based in Rome, Italy since I was born.
            <br />
            Half Italian and half Portuguese.
            <br />
            I'm studying Computer Science at Tor Vergata University in Rome.
            <br />
            <br />I mainly work with javascript and frameworks, such as React.js
            <br />
            but I'm very flexible and not afraid to try anything else.
          </h1>
          <h1 className={SecondBackText}>
            Contact me :)
            <br />
            Manuel Scarapazzi
          </h1>
        </div>
        <div className="Footer">
          {"Made with ♥ in Rome"}
          <SocialIcon
            color="#fff"
            style={{ height: 25, width: 25, marginLeft: "5px" }}
            url="http://twitter.com/DoodlePain"
          />
          <SocialIcon
            color="#fff"
            style={{ height: 25, width: 25, marginLeft: "5px" }}
            url="https://www.linkedin.com/in/manuel-scarapazzi-514868118/"
          />
          <SocialIcon
            color="#fff"
            style={{ height: 25, width: 25, marginLeft: "5px" }}
            url="https://www.facebook.com/ZioBanana"
          />
          <SocialIcon
            style={{ height: 25, width: 25, marginLeft: "5px" }}
            color="#fff"
            url="https://www.instagram.com/frullo_e_peroni/?hl=it"
          />
          <SocialIcon
            style={{ height: 25, width: 25, marginLeft: "5px" }}
            color="#fff"
            url="https://github.com/DoodlePain"
          />
        </div>
      </div>
    );
  }
}

export default Polaroid;
