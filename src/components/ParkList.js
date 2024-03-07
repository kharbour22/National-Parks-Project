import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Park from "./Park";
import SearchBar from "./SearchBar";

function ParkList() {
  const { parks } = useOutletContext();
  const [parkComponents, setParkComponents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const parkComponents = parks.map((park) => (
      <Park key={park.id} park={park} />
    ));
    setParkComponents(parkComponents);
  }, [parks]);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredParkComponents = parkComponents.filter((component) =>
    component.props.park.name.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <div className="introtext">
      <p>
          Have you always been interested in traveling our nation's national
          parks but don't know where to start? National Parks Explorer provides
          suggestions for where to start based off your current location or
          favorite activities. You can mark off completed adventures and even
          add some more national parks to explore!
        </p>
     
        <SearchBar onSearch={handleSearch} />
      </div>
      <ul className="park-list">{filteredParkComponents}</ul>
    </>
  );
}

export default ParkList;