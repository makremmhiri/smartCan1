import React, { useState, useEffect } from "react";
import axios from 'axios';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import Orange from '../img/orange.png';
import Blue from '../img/blue.png';
import Red from '../img/red.png';
import Keys from '../img/keys.png';
import daata from './mostawda3.json'

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: "AIzaSyBOiPCKHBA-w8NaEi9bSOUNDJhQJLccGqk",
  });

  const [map, setMap] = useState(null);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/data')
      .then(response => {
        if (response.data.success) {
          setData(response.data.data);
        } else {
          console.error('Failed to fetch data');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    let circle = null;

    if (map) {
      const circleOptions = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.09,
        map: map,
        center: { lat: 33.876289, lng: 10.855631 },
        radius: 350,
      };
      circle = new window.google.maps.Circle(circleOptions);
    }

    return () => {
      if (circle) {
        circle.setMap(null);
      }
    };
  }, [map]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <GoogleMap
        id="my-map"
        center={{ lat: 33.876289, lng: 10.855631 }}
        zoom={16.5}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={setMap}
      >
        {/* daata.data */}
        {data.map((item, index) => (
          <Marker
            key={index}
            position={{ lat: item.x, lng: item.y }}
            onClick={() => setSelectedItem(item)}
            icon={{
              url: item.remp > 700 ? Blue : item.remp > 300 ? Orange : Red,
              scaledSize: new window.google.maps.Size(50, 50),
            }}
          />
        ))}
        {selectedItem && (
          <InfoWindow
            position={{ lat: selectedItem.x, lng: selectedItem.y }}
            onCloseClick={() => setSelectedItem(null)}
          >
            <div>{selectedItem.nom}</div>
          </InfoWindow>
        )}
      </GoogleMap>
      <div style={{ position: 'absolute', bottom: 100, left: 20 }}>
        <img src={Keys} alt="Keys" style={{ width: '200px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default MapComponent;
