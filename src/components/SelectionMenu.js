import React, { useState } from "react"
import SearchBar from "./SearchBar"

function SelectionMenu() {
  const [selected, setSelected] = useState(0)

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
        <button
          className="selectionButton"
          onClick={() => {
            setSelected(props.index)
          }}
        >
          <p
            className={`selectionButtonText ${
              props.selectedIndex === props.index ? "active" : "inactive"
            } `}
          >
            {props.value}
          </p>
          <div
            className={`buttonActiveSubDivider ${
              props.selectedIndex === props.index ? "active" : "inactive"
            } `}
          ></div>
        </button>
      </div>
    )
  }

  return (
    <div className="menuContainer">
      <div className="placeholderDiv" />
      <div className="selectionMenu">
        <div className="selectionButtonContainer">
          {items.map((item, index) => (
            <Item
              key={item.key}
              value={item}
              index={index}
              selectedIndex={selected}
            />
          ))}
        </div>
      </div>
      <SearchBar />
    </div>
  )
}

export default SelectionMenu
