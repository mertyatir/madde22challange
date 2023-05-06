import React, { useContext } from "react"
import ItemBox from "./ItemBox"

import { eventInfo } from "../mockData/evetInfo"

import { FilterContext } from "../providers/FilterProvider"

function ItemBoxList() {
  const [selectedFilter] = useContext(FilterContext)

  const items = eventInfo

  return (
    <div className="itemBoxListContainer">
      {items
        .filter(
          (item) =>
            selectedFilter.length === 0 ||
            selectedFilter.includes(item.location)
        )
        .map((item) => (
          <ItemBox
            title={item.title}
            infoText={item.infoText}
            location={item.location}
            img={item.img}
          />
        ))}
    </div>
  )
}

export default ItemBoxList
