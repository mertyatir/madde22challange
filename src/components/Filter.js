import React, { useState } from "react"
import { ReactComponent as ThreeDots } from "../assets/threeDots.svg"

function Filter() {
  return (
    <div>
      <button type="button" className="filterButton">
        <div className="filterIconContainer">
          <ThreeDots />
        </div>{" "}
        Filtrele
      </button>
    </div>
  )
}

export default Filter
