import { useEffect, useRef, useState } from 'react'
import Screen0 from './screens/Screen0/Screen0'
import Screen1 from './screens/Screen1/Screen1'
import Screen2Test from './screens/Screen2Test/Screen2Test'
import Screen3 from './screens/Screen3/Screen3'
import './App.css'

function App() {
  const [screen, setScreen] = useState(2)

  const [isScroll, setIsScroll] = useState(false);
  const changeScroll = (val: boolean) => {
    console.log(val);

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
        {screen === 0 && <Screen0 changeScreen={() => setScreen(1)} />}
        {screen === 1 && <Screen1 changeScreen={() => setScreen(2)} numScreen={0}></Screen1>}
        {screen === 2 && <Screen2Test setNumAnswerMenu={setNumAnswerMenu} changeScroll={changeScroll} changeScreen={() => setScreen(3)}></Screen2Test>}
        {screen === 3 && <Screen3 changeScreen={() => setScreen(4)}></Screen3>}
        {screen === 4 && <Screen1 changeScreen={() => setScreen(0)} numScreen={1}></Screen1>}
      </div>

    </>
  )
}

export default App
