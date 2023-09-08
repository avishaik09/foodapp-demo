import React, { useState } from "react";
import { restaurants } from "../config";
function SearchBox() {
  const [search, setSearch] = useState("");
  const [restaurant, setRestaurant] = useState(restaurants);


const filterData = () => {
  
};

  const handleSearch = () => {
    filterData();
  };
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;
