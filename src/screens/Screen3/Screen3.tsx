import style from "./Screen3.module.css"
import urlContur from "../../assets/images/border-puzzle.svg"
import urlImg1 from "../../assets/images/puzzle/1-answer.png"
import urlImg2 from "../../assets/images/puzzle/2-answer.png"
import urlImg3 from "../../assets/images/puzzle/3-answer.png"
import urlImg4 from "../../assets/images/puzzle/4-answer.png"
interface IProps {
    changeScreen: () => void;
}

function Screen3(props: IProps) {
    const { changeScreen } = props;



    const dataPuzzleClass = [style.puzzlePoz0, style.puzzlePoz1, style.puzzlePoz2, style.puzzlePoz3].sort(function () { return 0.5 - Math.random() })
    console.log(dataPuzzleClass);



    const dataImages = [
        urlImg1, urlImg2, urlImg3, urlImg4
    ]
    changeScreen()
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__content}>
                <h3 className={style.title + " " + style.text}>Собери пазл, перетаскивая<br />его части на игровое поле.<br />Тогда ты узнаешь, в чём секрет<br />дружного коллектива НИПИГАЗа!</h3>
                <div className={style.puzzle}>
                    <div className={style.puzzle__contur}>
                        <img src={urlContur} alt="contur" />
                        {dataImages.map((item, index) => <div className={`${style.puzzle__item} ${style[`puzzle${index}`]} ${dataPuzzleClass[index]}`}>
                            <img src={item} alt={`puzzle${index}`} />
                        </div>)}

                    </div>

                </div>
            </div>


        </div>
    );
}

export default Screen3;