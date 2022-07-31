import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {PropsMap} from '../../types/properties/properties';
import {URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';

function Map(props: PropsMap) {
  const {cards, city} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      cards.forEach((point) => {
        leaflet
          .marker({
            lat: point.position.lat,
            lng: point.position.lng
          }, {
            icon: defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, cards]);


  return (
    <section className="cities__map1 map1"
      ref={mapRef}
      style={{height: '500px', width: '500px'}}
    />
  );
}

export default Map;

