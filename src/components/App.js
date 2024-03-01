import { Outlet } from "react-router-dom";
import { useState, useEffect} from "react";

function App() {

  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/parks')
    .then(response => response.json())
    .then(parksData => setParks(parksData))
  }, [])

  console.log(parks)

  return (
    <div className="App">
      <h1>National Parks Explorer</h1>
      
      <Outlet context={{parks: parks}}/>
    </div>
  );
}

export default App;
