import { createContext, useState } from "react"

export const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [selectedFilter, setSelectedFilter] = useState([])

  return (
    <FilterContext.Provider value={[selectedFilter, setSelectedFilter]}>
      {children}
    </FilterContext.Provider>
  )
}
