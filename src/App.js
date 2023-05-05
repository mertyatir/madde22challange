import "./App.css"
import { ReactComponent as Logo } from "./assets/Exclude.svg"
import FilterSection from "./components/FilterSection"
import ItemBoxList from "./components/ItemBoxList"

import SelectionMenu from "./components/SelectionMenu"

function App() {
  return (
    <div className="App">
      <Logo className="App-logo" />
      <h2 className="heading">ETKİNLİKLER</h2>
      <SelectionMenu />
      <FilterSection />
      <ItemBoxList />
    </div>
  )
}

export default App
