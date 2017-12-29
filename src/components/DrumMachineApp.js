import React from "react";
import Display from "../components/Display";
import DrumPad from "../components/DrumPad";

export default class DrumMachineApp extends React.Component {

  getPressedKey = (e, mykey) => {
    // console.log('key', mykey);
  };
  handleKeyPress = e => {
    // this.playAudio(e);
  };
  handleClick = e => {
    console.log("pressed a button");
  };
  playAudio = e => {
    switch (e.key) {
      case "q":
        console.log(`q key pressed`);
        break;
      case "w":
        console.log("w key pressed");
        break;
      case "e":
        console.log("e key pressed");
        break;
      case "a":
        console.log("a key pressed");
        break;
      case "s":
        console.log("s key pressed");
        break;
      case "d":
        console.log("d key pressed");
        break;
      case "z":
        console.log("z key pressed");
        break;
      case "x":
        console.log("x key pressed");
        break;
      case "c":
        console.log("c key pressed");
        break;
    }
  };
  render() {
    return (
      <div id="drum-machine" className="drum-machine-app">
        <Display />
        <DrumPad
          handleKeyPress={this.handleKeyPress}
          handleClick={this.handleClick}
          getPressedKey={this.getPressedKey}
        />
      </div>
    );
  }
}
