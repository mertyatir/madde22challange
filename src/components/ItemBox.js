import React from "react"

import { ReactComponent as LocationIcon } from "../assets/Frame.svg"

function ItemBox({ title, infoText, img }) {
  return (
    <div className="itemBoxContainer">
      <div className="dateContainer">
        <span class="bannerText">Konser</span>
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
          <p style={{ textAlign: "left" }}>{infoText}</p>
        </div>
        <div className="buttonSectionContainer">
          <p className="informationItemButtonText">Bilet Al</p>

          <button
            type="button"
            id="addToCalendarButton"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="popover-content-76"
          >
            <span class="addToCalendarText"></span>
            Takvime Ekle
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemBox
