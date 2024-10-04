import React, { Component } from "react";
import Colorboxes from "./colorBox";
import Navbar from "./navbar";
import './palete.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { sliderValue: 400, selectedValue: 'hex' };
    this.handleSlider = this.handleSlider.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }

  handleSlider(value) {
    this.setState({ sliderValue: value });
  }

  handleFormatChange(format) {
    this.setState({ selectedValue: format });
  }

  render() {
    const {paletteName,emoji} = this.props.seedColors;
    const { sliderValue, selectedValue } = this.state;
    const colors = this.props.seedColors.colors[sliderValue];

    const colorboxes = colors.map((color) => {
      const colorValue = selectedValue === 'hex' ? color.hex : selectedValue === 'rgb' ? color.rgb : color.rgba;
      return <Colorboxes background={colorValue} name={color.name} key={color.name} />;
    });

    return (
      <div className="palette">
        <Navbar
          sliderValue={sliderValue}
          handleSlider={this.handleSlider}
          selectedValue={selectedValue}
          handleFormatChange={this.handleFormatChange}
        />
        <div className="color-boxes">{colorboxes}</div>
        <div className="pallete-footer">
          {paletteName}
          {emoji}
        </div>
      </div>
    );
  }
}

export default Palette;
