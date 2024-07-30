import style from "./Screen3.module.css"
import urlContur from "../../assets/images/border-puzzle.svg"
interface IProps {
    changeScreen: () => void;
}

function Screen3(props: IProps) {
    const { changeScreen } = props;
    changeScreen()
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__content}>
                <h3 className={style.title + " " + style.text}>Собери пазл, перетаскивая<br />его части на игровое поле.<br />Тогда ты узнаешь, в чём секрет<br />дружного коллектива НИПИГАЗа!</h3>
                <div className={style.puzzle}>
                    <div className={style.puzzle__contur}>
                        <img src={urlContur} alt="contur" />
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Screen3;