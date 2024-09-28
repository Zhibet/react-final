import React, { Component } from "react";
import Colorboxes from "./colorBox";
import './palete.css'

class Palette extends Component {
  render() {
    const colorboxes = this.props.colors.map((color) => (
      <Colorboxes background={color.color} name={color.name} key={color.name} />
    ));

    return (
      <div className="palette">
        {/* Navbar */}
        <div className="color-boxes">{colorboxes}</div>
        {/* Footer */}
      </div>
    );
  }
}

export default Palette;
