import React from "react"

import { ReactComponent as SearchIcon } from "../assets/Search.svg"

function SearchBar() {
  return (
    <div class="searchContainer">
      <div class="searchIconContainer">
        <SearchIcon className="searchIcon" />
      </div>
      <input type="text" placeholder="Arama" name="searchTerm" class="input" />
    </div>
  )
}

export default SearchBar
