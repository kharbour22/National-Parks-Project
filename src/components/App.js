import { Outlet } from "react-router-dom";
import { useState, useEffect} from "react";
import NavBar from "./NavBar";
import './App.css';

function App() {

  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/parks')
    .then(response => response.json())
    .then(parksData => setParks(parksData))
  }, [])

  function addPark(newPark){

   fetch('http://localhost:4000/parks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPark)
   })
   .then(response => response.json())
   .then(newParkData => setParks(parks => [...parks, newParkData]))

  }

  console.log(parks)

  return (
    <div className="App">
      <NavBar/>
      <h1>National Parks Explorer</h1>
      <p>Have you always been interested in traveling our nation's National Parks but don't know where to start? National Parks Explorer provides suggestions for where to start based off your current location or favorite activities. You can mark off completed adventures and even add some more national parks to explore!</p>
      
      <Outlet context={{parks: parks, addPark: addPark}}/>
    </div>
  );
}

export default App;
