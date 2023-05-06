import "./App.css"
import { ReactComponent as Logo } from "./assets/images/Exclude.svg"
import FilterSection from "./components/FilterSection"
import ItemBoxList from "./components/ItemBoxList"

import SelectionMenu from "./components/SelectionMenu"

import { FilterProvider } from "./providers/FilterProvider"

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Logo className="App-logo" />
        <h2 className="heading">ETKİNLİKLER</h2>
        <SelectionMenu />
        <FilterSection />
        <ItemBoxList />
      </FilterProvider>
    </div>
  )
}

export default App
