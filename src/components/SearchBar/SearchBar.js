import React, { useState } from "react";
import "./searchbar.css"


function SearchBar({ searchFilter }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    searchFilter(e.target.value); //case sensitive
  };

  return (
    <>
      
      <div className="search">
        <input className="search-input" value={search} type="search" onChange={handleSearchInput}
        placeholder="Search.." />
      </div>
    </>
  );
}

export default SearchBar;