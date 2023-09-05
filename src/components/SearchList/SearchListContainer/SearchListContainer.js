import React from "react";
import SearchItem from "../SearchItem/SearchItem";

function SearchListContainer(props) {
  return (
    <div>
      {props.data.map((item, index) => (
        <SearchItem data={item} key={index} />
      ))}
    </div>
  );
}

export default SearchListContainer;
