import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

const TripPlanner = () => {
    const [markers, setMarkers] = useState([]);

    const onMapClick = (e) => {
        setMarkers([...markers, { lat: e.latLng.lat(), lng: e.latLng.lng() }]);
    };

    return (
        <div>
            <h1>Trip Planner</h1>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onClick={onMapClick}
                >
                    {markers.map((marker, index) => (
                        <Marker key={index} position={marker} />
                    ))}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default TripPlanner;
