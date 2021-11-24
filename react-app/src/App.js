import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import "./App.css";

function App() {
  const [activeInfo, setActiveInfo] = useState(false);
  const [position, setPosition] = useState([0, 0]);
  const [featuresArray, setFeaturesArray] = useState();
  const [defaultColor, setDefaultColor] = useState(true);

  async function getData() {
    const response = await fetch("http://localhost:5000/mapview");
    const jsonResponse = await response.json();
    const teste = jsonResponse.features;
    var featuresArray = jsonResponse.features.slice(1, 7); // todo remove slice!
    setFeaturesArray(featuresArray);
  }

  useEffect(() => {
    getData();
  }, []);

  const markerHtmlStyles = (color) => {
    if (defaultColor == false) {
      var iconColor = color;
    } else {
      iconColor = "grey";
    }
    return `background-color: ${iconColor};
    width: 1rem;
    height: 1rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`;
  };

  const icon = (color) => {
    const obejctStyle = markerHtmlStyles(color);
    const htmlString = `<span style="${obejctStyle}" />`;
    return divIcon({
      className: "my-custom-pin",
      iconAnchor: [0, 24],
      labelAnchor: [-6, 0],
      popupAnchor: [0, -36],
      html: htmlString,
    });
  };

  const switchColors = () => {
    setDefaultColor(!defaultColor);
  };

  const displayInfo = () => {
    setDefaultColor(!activeInfo);
  };

  return (
    <>
      <button onClick={switchColors}> Switch </button>
      <MapContainer
        center={[8.382046, 11.6146463]}
        center={position}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {featuresArray &&
          featuresArray.map((featureObject, idx1) => {
            return featureObject.geometry.coordinates.map(
              (singleCoordinate, idx2) => {
                const myid = idx1 + "_" + idx2;

                return (
                  <Marker
                    key={myid}
                    position={singleCoordinate}
                    icon={icon(featureObject.properties.color)}
                  >
                    <Popup
                      position={singleCoordinate}
                      onClick={() => {
                        <div>
                          {/* not working yet, it is popping up a display but without the data */}
                          <p>
                            Each info : {featureObject.properties.info.diameter}
                          </p>
                          <p>Each uuid : {featureObject.properties.uuid}</p>
                        </div>;
                      }}
                    ></Popup>
                  </Marker>
                );
              }
            );
          })}
        ​
      </MapContainer>
    </>
  );
}

export default App;
