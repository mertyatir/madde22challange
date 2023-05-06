import React, { useContext } from "react"
import ItemBox from "./ItemBox"

import { eventInfo } from "../mockData/evetInfo"

import { FilterContext } from "../providers/FilterProvider"

function ItemBoxList() {
  const { selectedFilter } = useContext(FilterContext)
  const { eventType } = useContext(FilterContext)

  const items = eventInfo

  return (
    <div className="itemBoxListContainer">
      {items
        .filter(
          (item) =>
            (selectedFilter.length === 0 ||
              selectedFilter.includes(item.location)) &&
            (eventType === "Tüm Etkinlikler" || item.type === eventType)
        )
        .map((item) => (
          <ItemBox
            title={item.title}
            infoText={item.infoText}
            location={item.location}
            type={item.type}
            img={item.img}
          />
        ))}
    </div>
  )
}

export default ItemBoxList
