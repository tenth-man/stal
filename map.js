// import './style.css';
import Map from './libs/OpenLayers_v10.1.0/Map.js';
import OSM from './libs/OpenLayers_v10.1.0/source/OSM.js';
import TileLayer from './libs/OpenLayers_v10.1.0/layer/Tile.js';
import View from './libs/OpenLayers_v10.1.0/View.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});