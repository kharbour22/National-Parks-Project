import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="searchbar">
      <h4>
        <u>Search by Name</u>:
      </h4>
      <input
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;