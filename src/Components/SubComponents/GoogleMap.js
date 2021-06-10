import React from 'react'
import GoogleMapReact from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";



export default function GoogleMap({selectedDiv}) {
    const myMapKey = process.env.REACT_APP_MAPS;
  
    const zoomProp = 8;
  
    const centerProp = {
      lat: 35.5321,
      lng: -77.3766,
    };
    return (
        <div style={{ height: "200px", width: "100%" }}>
<GoogleMapReact
  bootstrapURLKeys={{ key: myMapKey }}
  defaultZoom={zoomProp}
  center={centerProp}
>
  <RoomIcon
    lat={selectedDiv.payload.origin.OriginGeometry.OriginLat}
    lng={selectedDiv.payload.origin.OriginGeometry.OriginLng}
    label="My Marker"
  />
</GoogleMapReact>
</div>
    )
}


