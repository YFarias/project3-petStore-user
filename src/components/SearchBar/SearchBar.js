import React, { useState } from "react";


function SearchBar({ searchFilter }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    searchFilter(e.target.value); //case sensitive
  };

  return (
    <>
      <div>Search</div>
      <div class="search">
        <input value={search} type="text" onChange={handleSearchInput} />
      </div>
    </>
  );
}

export default SearchBar;