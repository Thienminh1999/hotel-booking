import React from "react";

import Header from "../../HeaderHomePage/Header/Header";
import SearchBarContainer from "../../HeaderHomePage/SearchBar/SearchBarContainer/SearchBarContainer";
import { useLocation } from "react-router-dom";

function HeaderContainer(props) {
  const location = useLocation();

  return (
    <div>
      <Header />
      {location.pathname === "/" && <SearchBarContainer {...props} />}
    </div>
  );
}

export default HeaderContainer;
