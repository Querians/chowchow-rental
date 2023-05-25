import { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

export const Map = ({
  coordinates = { lat: 13.736988050394881, lng: 100.52436590194702 },
  isEditable = true,
  height = '300px',
}) => {
  const [currentLocation, setCurrentLocation] = useState(coordinates);

  useEffect(() => {
    if (!isEditable) {
      return;
    }
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by this browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.log(error);
      },
    );
  }, [isEditable]);

  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  return (
    <div className="relative flex flex-col items-center justify-center gap-3">
      <GoogleMap
        zoom={16}
        center={currentLocation}
        mapContainerClassName="map"
        mapContainerStyle={{ width: '100%', height: height, margin: 'auto' }}
        onClick={(e) => {
          if (isEditable) {
            setCurrentLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          }
        }}
      >
        {currentLocation && <MarkerF position={currentLocation} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
