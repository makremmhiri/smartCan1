

import '../App.css';
import React, { useEffect } from 'react'; // Importing React and useEffect
import L from 'leaflet'; // Importing Leaflet library or defining 'L' if it's not a library import

const MapComponent = () => {
    useEffect(() => {
      const initializeMap = () => {
        const map = L.map('map');
        map.setView([33.80958, 10.99084], 15);
  
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 17,
          minZoom: 13,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
  
        // Custom marker icons
        const red = L.icon({
          iconUrl: './map/red.png',
          iconSize: [35, 45]
        });
  
        const blue = L.icon({
            iconUrl: './map/blue.jpg',
          iconSize: [40, 45]
        });
  
        const orange = L.icon({
            iconUrl: './map/red.png',
          iconSize: [40, 45]
        });
  
        // Data for markers
        const data = {
          midoun: {
            coords: [33.8073, 10.991],
            title: "midouun",
            remp: "80",
          },
          mostachfaa: {
            coords: [33.8128, 10.99060],
            title: "mostachfaa",
            remp: "50",
          },
          rond_point: {
            coords: [33.8107, 10.9905],
            title: "rond_point",
            remp: "0",
          },
          aa: {
            coords: [33.8033, 10.9960],
            title: "aa",
            remp: "50",
          },
          bb: {
            coords: [33.8168, 10.99560],
            title: "bb",
            remp: "0",
          },
          cc: {
            coords: [33.8147, 10.9805],
            title: "cc",
            remp: "80",
          }
        };
  
        // Adding markers to the map
        for (let key in data) {
          const varia = data[key];
          let color, niv;
  
          if (varia.remp === 80) {
            color = red;
            niv = "full";
          } else if (varia.remp === 50) {
            color = orange;
            niv = "50%";
          } else {
            color = blue;
            niv = "empty";
          }
  
          L.marker(varia.coords, {
            title: niv,
            //icon: color,
          })
            .addTo(map)
            .bindPopup(varia.remp);
        }
      };
  
      initializeMap();
    }, []);
  
    return (
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    );
  };
  
  export default MapComponent;