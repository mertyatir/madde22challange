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
        <button className="selectionButton">{props.value}</button>
      </div>
    )
  }

  return (
    <div className="menuContainer">
      <div className="placeholderDiv" />
      <div className="selectionMenu">
        <div className="selectionButtonContainer">
          {items.map((item) => (
            <Item key={item.key} value={item} />
          ))}
          <div className="buttonActiveSubDivider"></div>
        </div>
      </div>
      <SearchBar />
    </div>
  )
}

export default SelectionMenu
