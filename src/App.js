import React, { Component } from "react";
import ReactSVGPanZoom from "./viewer";
import HumanFront from "./images/HumanFront";
import Node from "./ui/Node";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.Viewer = null;
  }

  componentDidMount() {
    this.Viewer.fitToViewer();
  }

  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={event => this.Viewer.zoomOnViewerCenter(1.1)}
        >
          Zoom in
        </button>
        <button
          className="btn"
          onClick={event => this.Viewer.fitSelection(40, 40, 200, 200)}
        >
          Zoom area 200x200
        </button>
        <button className="btn" onClick={event => this.Viewer.fitToViewer()}>
          Fit
        </button>

        <hr />

        <ReactSVGPanZoom
          style={{ border: "1px solid black" }}
          width={358.4}
          height={790}
          ref={Viewer => (this.Viewer = Viewer)}
          onClick={event => {
            console.log("click", event.x, event.y, event.originalEvent);
          }}
          onMouseUp={event => console.log("up", event.x, event.y)}
          onMouseMove={event => console.log("move", event.x, event.y)}
          onMouseDown={event => console.log("down", event.x, event.y)}
        >
          <svg width={358.4} height={790}>
            <HumanFront />
          </svg>
        </ReactSVGPanZoom>
      </div>
    );
  }
}

export default App;
