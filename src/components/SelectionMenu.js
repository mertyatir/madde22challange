import React from "react"
import SearchBar from "./SearchBar"

function SelectionMenu() {
  const items = [
    "Tüm Etkinlikler",
    "Tiyatro",
    "Konser",
    "Stand up",
    "Sinema",
    "Çocuk",
  ]

  function Item(props) {
    return (
      <div>
        <button class="selectionButton">{props.value}</button>
        <div class="buttonActiveSubDivider"></div>
      </div>
    )
  }

  return (
    <div class="menuContainer">
      <div class="placeholderDiv" />
      <div class="selectionMenu">
        <div class="selectionButtonContainer">
          {items.map((item) => (
            <Item key={item.key} value={item} />
          ))}
        </div>
      </div>
      <SearchBar />
    </div>
  )
}

export default SelectionMenu
