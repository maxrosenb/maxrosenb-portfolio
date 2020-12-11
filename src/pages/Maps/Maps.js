import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {MapButton} from './styles';

const containerStyle = {
  width: '550px',
  height: '550px'
};

const box = {
    display: 'flex',
    justifyContent: 'space-between',
}

// .box {
//     display: flex;
//     justify-content: space-between;
//   }
class MaxMap extends Component {
    constructor(props) {
        super(props);
        this.state = { center: {lat: 45.48087417054924,
                                lng: -122.63059402328261},
        zoomLevel: 12}
        ;
      }
    
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBd77gbj5S_VLrcTBXdgWZKMvj16slsq7Y"
      >
          
        <h1 style={{margin:'0.4rem'}}>Some places I've been to and like</h1> 
        <div style={box}>
        <div style={{display: 'flex', justifyContent: 'center',  margin: '20px', paddingLeft: '1rem'}}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.state.center}
          mapTypeId='satellite'
          zoom={this.state.zoomLevel}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
        <div>
        <MapButton onClick={() => this.moveToCoords(16.775777460835574, 96.14945593971332,16)}>Yangon, Myanmar</MapButton>
        <MapButton onClick={() => this.moveToCoords(20.6626136,96.9668552164,25)}>Htet Eain Gu Monastery</MapButton>
        <MapButton onClick={() => this.moveToCoords(23.242211051858582, 105.40648899981659,16)}>Ha Giang, Vietnam</MapButton>
        <MapButton onClick={() => this.moveToCoords(35.688569102305124, 139.68864496626833,18)}>Shinjuku, Tokyo, Japan</MapButton>
        <MapButton onClick={() => this.moveToCoords(13.356800906886365, 103.85076237289422,17)}>Siam Reap, Cambodia</MapButton>
        <MapButton onClick={() => this.moveToCoords(13.756, 100.50,14)}>Bangkok, Thailand</MapButton>
        </div>
        <div style={{marginRight: '5rem'}}>
        <MapButton onClick={() => this.moveToCoords(55.95, -3.1883,12)}>Edinburgh, Scotland</MapButton>
        <MapButton onClick={() => this.moveToCoords(51.5, 0.12,12)}>London, England</MapButton>
        <MapButton onClick={() => this.moveToCoords(47.4979, 19.04,12)}>Budapest, Hungary</MapButton>
        <MapButton onClick={() => this.moveToCoords(46.8303, 17.7340,12)}>Baloton, Hungary</MapButton>
        <MapButton onClick={() => this.moveToCoords(37.98, 23.7275,12)}>Athens, Greece</MapButton>
        <MapButton onClick={() => this.moveToCoords(46.3436, 7.0120,12)}>Leysin, Switzerland</MapButton>
        
        </div>
        <div style={{maxwidth: '50%'}}>
        <MapButton onClick={() => this.moveToCoords(45.48087417054924, -122.63059402328261,16)}>Portland, Oregon</MapButton>
        <MapButton onClick={() => this.moveToCoords(40.71172439504625, -74.08683081760121,12)}>New York, New York</MapButton>
        <MapButton onClick={() => this.moveToCoords(43.84201028867155, -102.31771854414151,12)}>The Badlands</MapButton>
        <MapButton onClick={() => this.moveToCoords(50.07410641313155, -122.87243265909468,12)}>Whistler Mountain, BC</MapButton>
        <MapButton onClick={() => this.moveToCoords(41.76351952123782, -87.69629086194182,16)}>Chicago, Illinois</MapButton>
        <MapButton onClick={() => this.moveToCoords(45.608319425338685, -95.53734197566811,12)}>Starbuck, Minnesota</MapButton>
        
        </div>
        </div>
        </div>
      </LoadScript>
    )
  }
  moveToCoords(lt,ln,zm) {
      this.setState({center: {lat: lt, lng: ln}});
      this.setState({zoomLevel: zm});
  }
  
}

export default React.memo(MaxMap)