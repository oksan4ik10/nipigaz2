import { useEffect, useRef, useState } from 'react'
import Screen2Test from './screens/Screen2Test/Screen2Test'
import Screen3 from './screens/Screen3/Screen3'
import './App.css'

function App() {
  const [screen, setScreen] = useState(3)

  const [isScroll, setIsScroll] = useState(false);
  const changeScroll = (val: boolean) => {
    setIsScroll(val);
  }


  const refWrapper = useRef<HTMLDivElement>(null)
  const [dataContainerCoordinate, setDataContainerCoordinate] = useState({ top: 0, left: 0 })
  useEffect(() => {
    if (refWrapper.current) {
      const { left, top } = refWrapper.current.getBoundingClientRect();
      refWrapper.current.style.setProperty('--top-container', `${top}px`);
      refWrapper.current.style.setProperty('--left-container', `${left}px`);
      setDataContainerCoordinate({
        top,
        left
      })

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
        {screen === 3 && <Screen3 dataContainerCoordinate={dataContainerCoordinate} changeScreen={console.log}></Screen3>}
      </div>

    </>
  )
}

export default App
