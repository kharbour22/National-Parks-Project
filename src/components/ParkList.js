import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Park from "./Park";
import SearchBar from "./SearchBar";

function ParkList() {
  const { parks } = useOutletContext();
  const [searchResults, setSearchResults] = useState([]);

  
  const parkComponents = parks.map(park => {
    return<Park key={park.id} park={park}/>
  })

  if (searchResults.length === 0 && parks.length > 0) {
    setSearchResults(parks);
  }

  const handleSearch = (searchTerm) => {
    const filteredParks = parks.filter((park) =>
      park.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredParks);
  };

  return (
    <>
      <div>
        <p>
          Have you always been interested in traveling our nation's national
          parks but don't know where to start? National Parks Explorer provides
          suggestions for where to start based off your current location or
          favorite activities. You can mark off completed adventures and even
          add some more national parks to explore!
        </p>
        <SearchBar onSearch={handleSearch} />
      </div>
      <ul className="park-list">
     
        {parkComponents}
      </ul>
    </>
  );
}

export default ParkList;