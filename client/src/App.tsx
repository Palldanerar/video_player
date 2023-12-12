import { BrowserRouter } from "react-router-dom"
import Videos from "./components/Videos"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Videos />
      </div>
    </BrowserRouter>
  )
}

export default App
