import style from "./Screen1.module.css"
import urlMenu from "../../assets/images/screen1/menu.png"
import urlArrow from "../../assets/images/screen1/arrow.svg"
import urlAvatar from "../../assets/images/screen1/avatar.png"

import dataMessages from "../../data/messages.json"

interface IProps {
    numScreen: number;
}
function Screen1(props: IProps) {
    const { numScreen } = props;
    const messages = dataMessages[numScreen];
    return (
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
            <footer className={style.footer}>
                <button className="btn">Берусь за дело</button>
            </footer>

        </div>
    );
}

export default Screen1;