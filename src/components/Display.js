import React from "react";

const Display = (props) => (
  <div id="display">
    <h1 className="display__title">{props.message}</h1>
  </div>
);

export { Display as default };
