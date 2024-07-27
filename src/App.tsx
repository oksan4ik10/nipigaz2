import { useState } from 'react'
import Screen2Test from './screens/Screen2Test/Screen2Test'
import './App.css'

function App() {
  const [screen, setScreen] = useState(2)

  return (
    <>
      <div className="container scroll__elem">
        {screen === 2 && <Screen2Test changeScreen={console.log}></Screen2Test>}
      </div>

    </>
  )
}

export default App
