import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3">
      <input
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
