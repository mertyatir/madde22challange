import "./App.css"

import Header from "./components/Header"
import FilterSection from "./components/FilterSection"
import ItemBoxList from "./components/ItemBoxList"
import SelectionMenu from "./components/SelectionMenu"
import { FilterProvider } from "./providers/FilterProvider"

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Header />
        <SelectionMenu />
        <FilterSection />
        <ItemBoxList />
      </FilterProvider>
    </div>
  )
}

export default App
