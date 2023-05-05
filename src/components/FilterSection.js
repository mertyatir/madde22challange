import React from "react"
import Filter from "./Filter"
import { ReactComponent as CalendarIcon } from "../assets/Calendar.svg"

function FilterSection() {
  return (
    <div className="filterSectionContainer">
      <Filter />
      <div className="filterSectionDivider">
        <div className="CalendarIconContainer">
          <CalendarIcon className="calendarIcon" />
        </div>

        <p> Takvimde Gör</p>
      </div>
    </div>
  )
}

export default FilterSection
