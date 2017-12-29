import React from "react";
import Display from "../components/Display";
import DrumPad from "../components/DrumPad";



export default class DrumMachineApp extends React.Component {
  state = {
    message: "Press a key to make some sounds",
    audioMessages: {
      Q: "CleanHat",
      W: "ClassicHat",
      E: "StreetHat",
      A: "GeePerc",
      S: "GreenPerc",
      D: "ZodiacPerc",
      Z: "AverageKick",
      X: "GoldenKick",
      C: "RemingtonKick"
    }
  };
  ;
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress = e => {
    const key = `${e.key.toUpperCase()}`;
    this.playAudio(key);
    this.setState(() => ({ message: this.state.audioMessages[key] }));
  };
  handleClick = e => {
    console.log("pressed a button");
  };
  playAudio(key) {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  }
  render() {
    return (
      <div id="drum-machine" className="drum-machine-app">
        <Display message={this.state.message} />
        <DrumPad
          handleKeyPress={this.handleKeyPress}
          handleClick={this.handleClick}
          audioMessages={this.state.audioMessages}
        />
      </div>
    );
  }
}
