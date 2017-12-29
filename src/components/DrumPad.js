import React from "react";

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handlePress);
  }
  handlePress = (e) => {
    console.log(e);

  };
  handleClick = () => {
    this.props.handleClick;
  };
  render() {
    return (
      <div id="drum-pad-container">
        <button
          className="drum-pad"
          onKeyPress={this.handlePress}
          onClick={this.handleClick}
        >
          Q
          <audio id="Q" src="" className="clip" />
        </button>
        <button className="drum-pad">
          W
          <audio id="W" src="" className="clip" />
        </button>
        <button className="drum-pad">
          E
          <audio id="E" src="" className="clip" />
        </button>
        <button className="drum-pad">
          A
          <audio id="A" src="" className="clip" />
        </button>
        <button className="drum-pad">
          S
          <audio id="S" src="" className="clip" />
        </button>
        <button className="drum-pad">
          D
          <audio id="D" src="" className="clip" />
        </button>
        <button className="drum-pad">
          Z
          <audio id="Z" src="" className="clip" />
        </button>
        <button className="drum-pad">
          X
          <audio id="X" src="" className="clip" />
        </button>
        <button className="drum-pad">
          C
          <audio id="C" src="" className="clip" />
        </button>
      </div>
    );
  }
}
export { DrumPad as default };
