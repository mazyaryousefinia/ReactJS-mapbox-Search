import React, { Component } from "react";
import "./App.css";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
class App extends Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWF6eWFyMTIzIiwiYSI6ImNqcHBncTF4ZTBnMW40MnFucmN6dzdyejAifQ.feo4O8GC-YKb0lNYDElbYg";
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11"
    });
    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
  }));
  }
  render() {
    return (
      <div className="App">
        <h1>جست و جوی نقشه</h1>
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
