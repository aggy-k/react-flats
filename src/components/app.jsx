import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';
import flats from '../../data/flats.js';
import Marker from './marker.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    };
  }

  center = () => {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: this.state.flats[index]
    });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.selectFlat}
            />
        </div>
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.center()}
            defaultZoom={11}>
            <Marker
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
              />
          </GoogleMapReact>
        </div>
      </div>
      );
  }
}

export default App;
