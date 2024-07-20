import Navbar from "./components/organisms/NavBar"
import GameTemplate from "./components/template/GameTemplate"
import { GameProvider } from "./contexts/GameContext"

function App() {

  return (
    <GameProvider>
      <Navbar/>
      <GameTemplate/>
    </GameProvider>
  )
}

export default App
