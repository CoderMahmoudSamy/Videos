import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <label htmlFor="search">Video Search</label>
        <input
          id="search"
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
