import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import '../assets/css/Map.css';

class Map extends Component {
  mapHandler = (event) => {
    let clicked = document.getElementsByClassName('clicked');
    if (clicked[0]) {
      clicked[0].classList.remove('clicked')
    }
    let element = event.target;
    element.classList.add('clicked');
  };

  render() {
    return (
      <USAMap
        width={600}
        onClick={this.mapHandler} />
    );
  }
}

export default Map;
