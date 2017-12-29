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
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress = e => {
    const key = this.handleKeyCode(e)
    if (this.state.audioMessages.hasOwnProperty(key)) {
      this.playAudio(key);
      this.setState(() => ({ message: this.state.audioMessages[key] }));
    }
  };
  handleClick = e => {
    const key = e.target.innerText
    this.playAudio(key);
    this.setState(() => ({ message: this.state.audioMessages[key] }));
  };
  playAudio(key) {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  }
  handleKeyCode = (e)  => {
    if (e.keyCode) {
      return String.fromCharCode(e.keyCode).toUpperCase()
    } else {
      return e.key.toUpperCase()
    }
  }
  render() {
    return (
      <div id="drum-machine" className="drum-machine-app">
        <Display message={this.state.message} />
        <DrumPad
          handleClick={this.handleClick}
          audioMessages={this.state.audioMessages}
        />
      </div>
    );
  }
}
