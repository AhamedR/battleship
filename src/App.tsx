import GameTemplate from "./components/template/GameTemplate"
import { GameProvider } from "./contexts/GameContext"

function App() {

  return (
    <GameProvider>
      <GameTemplate/>
    </GameProvider>
  )
}

export default App
