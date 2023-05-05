import React from "react"

import { ReactComponent as SearchIcon } from "../assets/Search.svg"

function SearchBar() {
  return (
    <div className="searchContainer">
      <div className="searchIconContainer">
        <SearchIcon className="searchIcon" />
      </div>
      <input
        type="text"
        placeholder="Etkinlik Ara"
        name="searchTerm"
        className="input"
      />
    </div>
  )
}

export default SearchBar
