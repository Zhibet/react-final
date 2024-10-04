import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedValue: props.selectedValue, // Store selectedValue in local state
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;
    this.props.handleFormatChange(newValue);
    this.setState({ selectedValue: newValue, open: true }); // Open Snackbar on selection
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false }); // Close Snackbar
  }

  render() {
    const { sliderValue, handleSlider } = this.props;
    const { open, selectedValue } = this.state;

    return (
      <nav className="navbar">
        <div className="slider-container">
          <a href="#">Amadou's Colorpicker</a>
          <Slider
            className="slider"
            min={100}
            max={900}
            step={100}
            value={sliderValue}
            onChange={handleSlider}
          />
        </div>
        <div className="selector">
          <Select
            id="demo-simple-select"
            value={selectedValue}
            onChange={this.handleChange}
          >
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - (255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - (255,255,255,1.0)</MenuItem>
          </Select>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            message={<span>You selected {selectedValue}</span>}
            action={
              <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;