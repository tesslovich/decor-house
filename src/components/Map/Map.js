import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

function Mapmodal () {
	return (
		<div style={{ height: '100%', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyAqXEDQr1fFiab_V8UpchEVtVZdu4P0L3k' }}
				defaultCenter={{
					lat: 59.95,
					lng: 30.33
				}}
				defaultZoom={11}
			>
			</GoogleMapReact>
		</div>
	)


}


export default Mapmodal;