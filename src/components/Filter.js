import React, { useState, useRef } from "react"
import { ReactComponent as ThreeDots } from "../assets/threeDots.svg"
import { ReactComponent as ThreeDotsInactive } from "../assets/threeDotsInactive.svg"

import { BsSquare, BsCheckSquare } from "react-icons/bs"

function Filter() {
  const [open, setOpen] = useState(false)

  let menuRef = useRef()

  function DropdownItem(props) {
    const [selected, setSelected] = useState(false)
    return (
      <div
        className="dropdownItem"
        onClick={() => {
          setSelected(!selected)
        }}
      >
        <div className="dropdownItemCheckboxContainer">
          <input
            type="checkbox"
            className="dropdownItemCheckbox"
            checked={selected}
            onChange={() => {}}
            style={{ display: "none" }}
          />

          {!selected && <BsSquare fill={"grey"} size={24} />}
          {selected && <BsCheckSquare fill={"#ff0d87"} size={24} />}
        </div>
        <p style={{ marginLeft: 5 }}> {props.text} </p>
      </div>
    )
  }

  return (
    <div>
      <div className="menu-container" ref={menuRef}>
        <button
          type="button"
          className={`filterButton ${open ? "active" : "inactive"}`}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <div className="filterIconContainer">
            {open ? <ThreeDots /> : <ThreeDotsInactive />}
          </div>
          Filtrele
        </button>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>Etkinlik Mekanı</h3>
          <DropdownItem text={"Maximum Uniq Hall"} />
          <DropdownItem text={"Maximum Uniq Box"} />
          <DropdownItem text={"Maximum Uniq Lounge"} />
          <DropdownItem text={"Maximum Uniq Açıkhava"} />
          <DropdownItem text={"Bahçe Fuaye"} />
          <h3>Etkinlik Mekanı</h3>
          <DropdownItem text={"Güncel Etkinlikler"} />
          <DropdownItem text={"Geçmiş Etkinlikler"} />
        </div>
      </div>
    </div>
  )
}

export default Filter
