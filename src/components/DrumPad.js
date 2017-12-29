import React from "react";

class DrumPad extends React.Component {
  handleKeyPress = (props) => {
    console.log('local')
    this.props.handleKeyPress
  }
  handleClick = (props) => {
    this.props.handleClick
  }
  render() {
    return (
      <div id="drum-pad-container" className="drum-pad-container">
        <button
          className="drum-pad"
          onKeyPress={this.handleKeyPress}
          onClick={this.handleClick}
        >
          Q
          <audio id="Q" src={`../sounds/${this.props.audioMessages['Q']}.wav`} className="clip" />
        </button>
        <button className="drum-pad">
          W
          <audio id="W" src={`../sounds/${this.props.audioMessages['W']}.wav`} className="clip" />
        </button>
        <button className="drum-pad">
          E
          <audio id="E" src={`../sounds/${this.props.audioMessages['E']}.wav`} className="clip" />
        </button>
        <button className="drum-pad">
          A
          <audio id="A" src={`../sounds/${this.props.audioMessages['A']}.wav`} className="clip" />
        </button>
        <button className="drum-pad">
          S
          <audio id="S" src={`../sounds/${this.props.audioMessages['S']}.wav`} className="clip" />
        </button>
        <button className="drum-pad">
          D
          <audio id="D" src={`../sounds/${this.props.audioMessages['D']}.wav`} className="clip" />
        </button>
        <button className="drum-pad">
          Z
          <audio id="Z" src={`../sounds/${this.props.audioMessages['Z']}.wav`} className="clip" />
        </button>
        <button className="drum-pad">
          X
          <audio id="X" src={`../sounds/${this.props.audioMessages['X']}.wav`} className="clip" />
        </button>
        <button className="drum-pad">
          C
          <audio id="C" src={`../sounds/${this.props.audioMessages['C']}.wav`} className="clip" />
        </button>
      </div>
    );
  }
}
export { DrumPad as default };
