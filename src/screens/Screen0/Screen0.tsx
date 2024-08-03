import style from "./Screen0.module.css"
import urlIconMsg from "../../assets/images/screen0/message-icon.svg"
interface IProps {
    changeScreen: () => void
}
function Screen0(props: IProps) {
    const { changeScreen } = props;
    return (
        <div className={style.container}>
            <main className={style.main}>
                <div className={style.main__msg + " " + style.msg}>
                    <div className={style.msg__icons}>
                        <img src={urlIconMsg} alt="icon" />
                        <span>Сообщения</span>
                    </div>
                    <h2 className={style.msg__title}>Любимый босс</h2>
                    <p className={style.msg__subtitle}>Первая миссия</p>
                    <p className={style.msg__text}>Привет, Агент 005! У меня для тебя важная миссия…</p>
                </div>
            </main>
            <footer className={style.footer}>
                <button className="btn" onClick={changeScreen}>Открыть</button>
            </footer>

        </div>
    );
}

export default Screen0;