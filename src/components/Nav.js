import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button class="raise" onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon className="faIconRaise" icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
