import React, { Component } from "react";
import ResizableRect from "react-resizable-rotatable-draggable";

// export default class Node extends Component {
//   state = {
//     x: this.props.x || 50,
//     y: this.props.y || 50
//   };

//   handleMouseDown = e => {
//     this.coords = {
//       x: e.pageX,
//       y: e.pageY
//     };
//     document.addEventListener("mousemove", this.handleMouseMove);
//   };

//   handleMouseUp = () => {
//     console.log("+++++++++++++++++++++");
//     console.log("node position: ", this.state);
//     console.log("=====================");
//     document.removeEventListener("mousemove", this.handleMouseMove);
//     this.coords = {};
//   };

//   handleMouseMove = e => {
//     const xDiff = this.coords.x - e.pageX;
//     const yDiff = this.coords.y - e.pageY;

//     this.coords.x = e.pageX;
//     this.coords.y = e.pageY;

//     this.setState({
//       x: this.state.x - xDiff,
//       y: this.state.y - yDiff
//     });
//   };

//   render() {
//     const { x, y } = this.state;
//     return (
//       <circle
//         r="20"
//         cx={x}
//         cy={y}
//         onMouseDown={this.handleMouseDown}
//         onMouseUp={this.handleMouseUp}
//       />
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 50,
      height: 50,
      top: 50,
      left: 50,
      rotateAngle: 0
    };
  }

  handleResize = (style, isShiftKey, type) => {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { top, left, width, height } = style;
    top = Math.round(top);
    left = Math.round(left);
    width = Math.round(width);
    height = Math.round(height);
    this.setState({
      top,
      left,
      width,
      height
    });
  };

  handleRotate = rotateAngle => {
    this.setState({
      rotateAngle
    });
  };

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    });
  };

  render() {
    const { width, top, left, height } = this.state;

    console.log("+++++++++++++++++++++");
    console.log("node state: ", this.state);
    console.log("node props: ", this.props);
    console.log("=====================");

    return (
      <div className="App" style={{ zIndex: 1000 }}>
        <ResizableRect
          left={left + this.props.left}
          top={top + this.props.top}
          width={width * this.props.scale}
          height={height * this.props.scale}
          rotatable={false}
          // aspectRatio={false}
          // minWidth={10}
          // minHeight={10}
          zoomable="n, w, s, e, nw, ne, se, sw"
          // onRotateStart={this.handleRotateStart}
          // onRotateEnd={this.handleRotateEnd}
          // onResizeStart={this.handleResizeStart}
          onResize={this.handleResize}
          // onResizeEnd={this.handleUp}
          // onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
          // onDragEnd={this.handleDragEnd}
        />
      </div>
    );
  }
}

export default App;
