import style from "./Screen1.module.css"
import urlMenu from "../../assets/images/screen1/menu.png"
import urlArrow from "../../assets/images/screen1/arrow.svg"
import urlAvatar from "../../assets/images/screen1/avatar.png"

import dataMessages from "../../data/messages.json"
import ScreenBlur from "../../components/ScreenBlur/ScreenBlur"
import Modal from "../../components/Modal/Modal"
import { useState } from "react"

interface IProps {
    numScreen: number;
    changeScreen: () => void
}
function Screen1(props: IProps) {
    const { numScreen, changeScreen } = props;
    const messages = dataMessages[numScreen];
    const [isStart, setIsStart] = useState(false)
    const text = "Вникай во все <b>ситуации,</b><br/>с которыми сталкиваешься —<br/>нужно <b>угадать, чем закончится</b><br/><b>каждая из них.</b> Так ты лучше<br/>запомнишь все детали. Заодно<br/>проверим твои навыки дедукции.<br/><br/>Каждая ситуация приносит<br/><b>кусочек пазла</b> с одним<br/>из элементов формулы дружного<br/>коллектива НИПИГАЗа. В конце<br/>ты соберёшь картину целиком<br/>и <b>узнаешь секретную формулу!</b>"
    const clickBtnStart = () => {
        setIsStart(true)
    }
    const clickChangeScreen = () => {
        changeScreen()
    }
    const clickLinkEnd = () => {
        console.log("ya for end");

    }
    return (
        <>
            <ScreenBlur screen={isStart}>
                <div className="modal__start">
                    <Modal btnText="Начать миссию" funcBtn={clickChangeScreen} text={text} />
                </div>
            </ScreenBlur>

            <div className={style.container}>

                <header className={style.header}>
                    <div className={style.header__user}>
                        <div className={style.arrow}>
                            <img src={urlArrow} alt="arrow" />
                        </div>
                        <div className={style.user}>
                            <div className={style.user__avatar}>
                                <img src={urlAvatar} alt="avatar" />
                            </div>
                            <div className={style.user__names}>
                                <span className={style.user__name}>Агент 001</span>
                                <span className={style.user__status}>Онлайн</span>
                            </div>

                        </div>

                    </div>
                    <div className={style.header__menu}>
                        <img src={urlMenu} alt="menu" />
                    </div>
                </header>
                <main className={style.main}>
                    {messages.map((item) => <div className={style.message}>
                        <div className={style.message__text} dangerouslySetInnerHTML={{ __html: item.text }}>
                        </div>
                        <span className={style.message__time}>{item.time}</span>

                    </div>)}

                </main>
                {numScreen === 0 && <footer className={style.footer + " " + style.footerFirst}>
                    <button className="btn" onClick={clickBtnStart} >Берусь за дело</button>
                </footer>}
                {numScreen === 1 && <footer className={style.footer + " " + style.footerSecond}>
                    <div className={style.footer__content}>
                        <p className={style.footer__text}>
                            А если ты готов стать частью <b>сплочённой</b><br /><b>команды,</b> которой нравится проводить<br />время вместе, приходи на программу<br />«Молодой специалист» от НИПИГАЗа!
                        </p>
                        <a href=" https://vk.com/" target="_blank" onClick={clickLinkEnd} className="btn" >В команду</a>
                    </div>

                </footer>}

            </div>
        </>
    );
}

export default Screen1;