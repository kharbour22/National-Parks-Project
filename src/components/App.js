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
      
      <Outlet context={{parks: parks, addPark: addPark}}/>
    </div>
  );
}

export default App;
