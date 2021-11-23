import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import { Icon } from 'leaflet'
// import covidData from './data.json'
// import icon1 from './images/covid19.svg'

export function Data() {
  //saving the information to be able to render
  const [serverResponse, setServerResponse] = useState()
// serverResponse = value
//setServerResponse is a function with the value as parameter
  async function getData() {
    console.log("fetching data")
    const response = await fetch('http://localhost:5000/mapview');
    console.log("fetching data in json")
    const jsonResponse = await response.json();
    setServerResponse(jsonResponse)
    console.log("fetching the json FEATURES")
    var jsonFeatures = jsonResponse.features
    console.log(jsonFeatures, 'NOW JSON FEATURES IN AN ARRAY')

  }

  useEffect(() => {
    console.log("in use effect!")
    getData();
  }, []);

  return (
  <>
  </>
  );
}

export default Data;