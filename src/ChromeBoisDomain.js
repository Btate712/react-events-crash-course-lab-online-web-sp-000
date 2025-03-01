import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
     drawChromeBoiAtCoords(event.clientX, event.clientY);
     console.log(event);
  }

  handleClick = () => toggleCycling();

  handleKeyPress = (event) => {
    if(event.which === 65) {
      resize('+');
      console.log("a pressed");
    } else if (event.which === 83) {
      resize('-');
      console.log("s pressed");
    }

  }
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
