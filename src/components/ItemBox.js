import React, { useState } from "react"

import { ReactComponent as LocationIcon } from "../assets/Frame.svg"

import { BsPlusCircle } from "react-icons/bs"

import { ReactComponent as AddedIcon } from "../assets/added.svg"

function ItemBox({ title, infoText, img }) {
  const [selected, setSelected] = useState(false)

  return (
    <div className="itemBoxContainer">
      <div className="dateContainer">
        <span className="bannerText">Konser</span>
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
            Maximum UNIQ Hall
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
