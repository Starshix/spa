import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import metka from '../../assets/images/metka.svg';

const MapComponent = ({ handleInputChange }) => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        const initialCoordinates = [54.3272, 48.3978];

        const newMap = L.map('map').setView(initialCoordinates, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(newMap);
        const customIcon = L.icon({
            iconUrl: metka,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: null,
            shadowSize: [41, 41],
            shadowAnchor: [12, 41]
        });

        const newMarker = L.marker(initialCoordinates, {
            draggable: true,
            icon: customIcon
        }).addTo(newMap);


        newMarker.on('dragend', function (event) {
            const position = newMarker.getLatLng();
            reverseGeocode(position.lat, position.lng);
        });

         newMap.on('click', function (event) {
            const position = event.latlng;
            reverseGeocode(position.lat, position.lng);

            newMarker.setLatLng(position);
        });


        setMap(newMap);
        setMarker(newMarker);

        return () => {
            newMap.remove();
        };
    }, [handleInputChange]);

    const reverseGeocode = async (lat, lng) => {
        try {
            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.address) {
                const formattedAddress = data.display_name;
                handleInputChange(formattedAddress);
            } else {
                handleInputChange('Адрес не найден');
            }
        } catch (error) {
            console.error('Ошибка при geocoding:', error);
            handleInputChange('Ошибка geocoding');
        }
    };

    return <div id="map" style={{ width: '100%', height: '500px' }} />;
};

export default MapComponent;