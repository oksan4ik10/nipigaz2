import { useEffect, useRef, useState } from 'react'
import Screen2Test from './screens/Screen2Test/Screen2Test'
import './App.css'

function App() {
  const [screen, setScreen] = useState(2)

  const [isScroll, setIsScroll] = useState(false);
  const changeScroll = (val: boolean) => {
    setIsScroll(val);
  }

  const refWrapper = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (refWrapper.current) {
      const { left, top } = refWrapper.current.getBoundingClientRect();
      refWrapper.current.style.setProperty('--top-container', `${top}px`);
      refWrapper.current.style.setProperty('--left-container', `${left}px`);

    }

  }, [])

  return (
    <>
      <div className={"container" + " " + (isScroll ? "" : "scroll__elem")} ref={refWrapper}>
        {screen === 2 && <Screen2Test changeScroll={changeScroll} changeScreen={() => setScreen(3)}></Screen2Test>}
      </div>

    </>
  )
}

export default App
