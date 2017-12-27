import React from "react";

const DrumPad = props => (
  <div id="drum-pad-container">
    <button
      className="drum-pad"
      onKeyPress={props.handleKeyPress}
      onClick={props.handleClick}
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

export { DrumPad as default };
