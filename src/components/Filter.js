import React, { useState, useRef, useContext } from "react"
import { ReactComponent as ThreeDots } from "../assets/images/threeDots.svg"
import { ReactComponent as ThreeDotsInactive } from "../assets/images/threeDotsInactive.svg"

import { BsSquare, BsCheckSquare } from "react-icons/bs"

import { FilterContext } from "../providers/FilterProvider"

function Filter() {
  const [open, setOpen] = useState(false)

  let menuRef = useRef()

  function DropdownItem(props) {
    const [selected, setSelected] = useState(false)
    const { selectedFilter, setSelectedFilter } = useContext(FilterContext)

    return (
      <div
        className="dropdownItem"
        onClick={() => {
          setSelected(!selected)
          if (selected) {
            setSelectedFilter(
              selectedFilter.filter((item) => item !== props.text)
            )
          } else setSelectedFilter(selectedFilter.concat(props.text))
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
        <p className="dropdownItemText" style={{ marginLeft: 5 }}>
          {props.text}{" "}
        </p>
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
          <p className="filterSectionText">Filtrele</p>
        </button>
        <div className="dropdownMenuContainer">
          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <div className="dropdownInside">
              <p className="dropDownMenuHeaderText">Etkinlik Mekanı</p>
              <DropdownItem text={"Maximum Uniq Hall"} />
              <DropdownItem text={"Maximum Uniq Box"} />
              <DropdownItem text={"Maximum Uniq Lounge"} />
              <DropdownItem text={"Maximum Uniq Açıkhava"} />
              <DropdownItem text={"Bahçe Fuaye"} />
              <p className="dropDownMenuHeaderText">Etkinlik Tarihi</p>
              <DropdownItem text={"Güncel Etkinlikler"} />
              <DropdownItem text={"Geçmiş Etkinlikler"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
