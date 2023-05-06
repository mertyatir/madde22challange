import { createContext, useState } from "react"

export const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [selectedFilter, setSelectedFilter] = useState([])

  const [eventType, setEventType] = useState("Tüm Etkinlikler")

  return (
    <FilterContext.Provider
      value={{ selectedFilter, setSelectedFilter, eventType, setEventType }}
    >
      {children}
    </FilterContext.Provider>
  )
}
