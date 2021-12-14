import { useState } from 'react';

function FilterBar({ filterProduct }) {
  const [firstLetter, setFirstLetter] = useState("All");

  const handleSelect = (event) => {
    setFirstLetter(event.target.value);

    filterProduct(event.target.value);
  }

  return (
    <div className="">
      
      <select name="" value={firstLetter} onChange={ handleSelect } >
        <option value="all"> All </option>
        <option value="dog">dog</option>
        <option value="cat">cat</option>
        <option value="food">food</option>
        <option value="toy">toy</option>
        <option value="accessories">accessories</option>
      </select>

    </div>
  );
}

export default FilterBar;