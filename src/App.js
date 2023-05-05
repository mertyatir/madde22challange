import "./App.css"
import { ReactComponent as Logo } from "./assets/Exclude.svg"

import SelectionMenu from "./components/SelectionMenu"

function App() {
  return (
    <div className="App">
      <Logo className="App-logo" />
      <h2 class="heading">ETKİNLİKLER</h2>
      <SelectionMenu />
    </div>
  )
}

export default App
