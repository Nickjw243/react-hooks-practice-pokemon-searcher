import React from "react";

function Search({search, updateSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={updateSearch} value={search}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
