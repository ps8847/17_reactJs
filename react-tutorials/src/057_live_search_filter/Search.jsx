import React, { useState } from "react";
import SearchRes from "./SearchRes";

const Search = () => {
  const [img, setimg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    setimg(data);
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="search anything"
          onChange={inputEvent}
          value={img}
        />
        {img === "" ? null : <SearchRes name={img} />}
      </div>
    </>
  );
};

export default Search;
