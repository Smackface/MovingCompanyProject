// import React, { Component } from "react";
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

// const mapStyles = {
//   width: "37vw",
//   height: "50vh",
// };




// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//   };
//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     });
//   onClose = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       });
//     }
//   };
//   render() {
//     return (
//       <Map
//         style={mapStyles}
//         google={this.props.google}
//         initialCenter={{
//           lat: 35.30835067848324,
//           lng: -77.154724620269,
//         }}
//       >
//         <Marker onClick={this.onMarkerClick} name={"Vanceboro"} />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_MAPS_API_KEY,
// })(MapContainer);

// This file only exists for my future
// reference and will be removed later