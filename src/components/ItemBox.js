import React, { useState } from "react"

import { ReactComponent as LocationIcon } from "../assets/images/Frame.svg"

import { BsPlusCircle } from "react-icons/bs"

import { ReactComponent as AddedIcon } from "../assets/images/added.svg"

function ItemBox({ title, infoText, location, img, type }) {
  const [selected, setSelected] = useState([])

  let backgroundColor

  switch (type) {
    case "Konser":
      backgroundColor = "#9FAE5D"
      break
    case "Stand up":
      backgroundColor = "#F19653"
      break
    case "Sinema":
      backgroundColor = "#F07266"
      break
    case "Tiyatro":
      backgroundColor = "#B77CB8"
      break
    case "Çocuk":
      backgroundColor = "#8B8000"
      break
    default:
      backgroundColor = "#9FAE5D"
  }

  return (
    <div className="itemBoxContainer">
      <div className="dateContainer">
        <span className="bannerText" style={{ background: backgroundColor }}>
          {type}
        </span>
        <div className="innerDateContainer">
          <span className="dateText">7</span>
          <span className="dateText">Eylül</span>
          <span className="dateText">Salı</span>
          <span className="dateText">21:15</span>
        </div>
        <div className="eventImageContainer">
          <img src={img} alt="EventImage1" />
        </div>
      </div>

      <div className="otherHalfofBox">
        <div className="informationContainer">
          <p className="informationHeaderText">{title}</p>

          <p id="itemBoxLocationText">
            {" "}
            <LocationIcon id="locationIcon" />
            {location}
          </p>

          <p className="infoTextContainer" style={{ textAlign: "left" }}>
            {infoText}
          </p>
        </div>
        <div className="buttonSectionContainer">
          <p className="informationItemButtonText">Bilet Al</p>

          <button
            type="button"
            id="addToCalendarButton"
            onClick={() => {
              setSelected(!selected)
            }}
          >
            <span className="addToCalendarText"></span>
            {selected ? (
              <AddedIcon size={20} style={{ marginRight: 5 }} />
            ) : (
              <BsPlusCircle size={20} style={{ marginRight: 5 }} />
            )}

            {selected ? "Takvime Eklendi" : "Takvime Ekle"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemBox
