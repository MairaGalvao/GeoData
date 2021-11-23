import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import covidData from './data.json'
import icon1 from './images/covid19.svg'
// import { LatLngExpression } from 'leaflet';


function App() {
  const [position, setPosition] = useState([0,0])
  //saving the information to be able to render
  const [serverResponseZero, setServerResponseZero] = useState()
  // const [serverResponseOne, setServerResponseOne] = useState()


  const testCoordinates = [[ 80.593683, 78.962883 ], [ 200.593683, 400.962883 ], [ 500.593683, 800.962883 ]]

// serverResponse = value
//setServerResponse is a function with the value as parameter
  async function getData() {
    console.log("fetching data")
    const response = await fetch('http://localhost:5000/mapview');
    console.log("fetching data in json")
    const jsonResponse = await response.json();
    // setServerResponse(jsonResponse)
    // console.log("fetching the json FEATURES")
    // var jsonFeatures = jsonResponse.features
    var jsonFeaturesZero = jsonResponse.features[0].geometry.coordinates
    console.log(jsonFeaturesZero, '<<<< ZERO ')
    // var jsonFeaturesOne = jsonResponse.features[0].geometry.coordinates[0]
    // console.log(jsonFeaturesOne, '<<<< ONE ')
    setServerResponseZero(jsonFeaturesZero)
    // setServerResponseOne(jsonFeaturesOne)
  }

  useEffect(() => {
    console.log("in use effect!")
    getData();
  }, []);
  // const [ activeCovid, setActiveCovid ] = useState( null );


  return (<>


 <MapContainer 
          position = { [ 80.593683, 78.962883 ] }
          center={position} 
          // position = 'topRight'
    
          zoom = { 5 }
          scrollWheelZoom = { true } 

      >
      <TileLayer 
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />


       <TileLayer 
          attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
          url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
  
    
  {serverResponseZero && serverResponseZero.map((anObjectMapped, index) => {
    console.log(anObjectMapped)     // [x, y]
    console.log(index)
    return (
      
        <Marker key={index} 
        position={[anObjectMapped[0], anObjectMapped[1]]}
          >
            
        </Marker>
        
    );
})}

  
  

  </MapContainer> 

  </>
  );
}

export default App;