import style from "./Screen1.module.css"
import urlMenu from "../../assets/images/screen1/menu.png"
import urlArrow from "../../assets/images/screen1/arrow.svg"
import urlAvatar from "../../assets/images/screen1/avatar.png"

function Screen1() {
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
            <main className={style.main}></main>
            <footer className={style.footer}>
                <button className="btn">Берусь за дело</button>
            </footer>

        </div>
    );
}

export default Screen1;