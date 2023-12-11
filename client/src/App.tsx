import Videos from "./components/Videos"
import { useGlobalContext } from "./context/Glodal"

function App() {

  const {videos} = useGlobalContext()

  console.log(videos)

  return (
    <div className="App">
      <Videos />
    </div>
  )
}

export default App
