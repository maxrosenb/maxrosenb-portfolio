import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {MapButton} from './styles';

const containerStyle = {
  width: '600px',
  height: '600px'
};

class MaxMap extends Component {
    constructor(props) {
        super(props);
        this.state = { center: {lat: -3.745,
        lng: -38.523}};
      }
    
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBd77gbj5S_VLrcTBXdgWZKMvj16slsq7Y"
      >
          
        <h1>Some places I've been to and like.</h1> 
        <div style={{display: 'flex', justifyContent: 'center',  margin: '20px'}}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.state.center}
          mapTypeId='satellite'
          zoom={12}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <MapButton onClick={() => this.moveToCoords(16.84,96.17)}>Yangon, Myanmar</MapButton>
        <MapButton onClick={() => this.moveToCoords(20.6626136,96.9668552164)}>Htet Eain Gu Monastery</MapButton>
        <MapButton onClick={() => this.moveToCoords(23.31145349, 105.30625718)}>Ha Giang, Vietnam</MapButton>
        <MapButton onClick={() => this.moveToCoords(35.6938,139.7034)}>Tokyo, Japan</MapButton>
        <MapButton onClick={() => this.moveToCoords(13.363,103.856)}>Siam Reap, Cambodia</MapButton>
        <MapButton onClick={() => this.moveToCoords(13.756, 100.50)}>Bangkok, Thailand</MapButton>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <MapButton onClick={() => this.moveToCoords(55.95, -3.1883)}>Edinburgh, Scotland</MapButton>
        <MapButton onClick={() => this.moveToCoords(51.5, 0.12)}>London, England</MapButton>
        <MapButton onClick={() => this.moveToCoords(47.4979, 19.04)}>Budapest, Hungary</MapButton>
        <MapButton onClick={() => this.moveToCoords(46.8303, 17.7340)}>Baloton, Hungary</MapButton>
        <MapButton onClick={() => this.moveToCoords(37.98, 23.7275)}>Athens, Greece</MapButton>
        <MapButton onClick={() => this.moveToCoords(46.3436, 7.0120)}>Leysin, Switzerland</MapButton>
        
        </div>
      </LoadScript>
    )
  }
  moveToCoords(lt, ln) {
      this.setState({center: {lat: lt, lng: ln}})
  }
  
}

export default React.memo(MaxMap)