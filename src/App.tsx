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
  const setNumAnswerMenu = (num: number) => {
    if (refWrapper.current) {
      refWrapper.current.style.setProperty('--num-puzzle', `${num}`);
    }
  }

  return (
    <>
      <div className={"container" + " " + (isScroll ? "" : "scroll__elem")} ref={refWrapper}>
        {screen === 2 && <Screen2Test setNumAnswerMenu={setNumAnswerMenu} changeScroll={changeScroll} changeScreen={() => setScreen(3)}></Screen2Test>}
      </div>

    </>
  )
}

export default App
