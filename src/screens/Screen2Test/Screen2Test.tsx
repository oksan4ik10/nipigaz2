
import style from "./Screen2Test.module.css"
import urlPersons from "../../assets/images/test1/people.png"

interface IProps {
    changeScreen: () => void
}


function Screen2Test(props: IProps) {
    return (
        <>
            <div className={style.dialog}>
                <div className={style.dialog__wrapper}>
                    <div className={style.dialog__bg}></div>
                    <div className={style.dialog__content}>
                        <div className={style.dialog__messages}>
                            <div className={style.dialog__item}>
                                <span className={style.dialog__text}>Хорошо, то,<br />о чём мы договаривались.</span>
                            </div>
                            <div className={style.dialog__item_left + " " + style.dialog__item}>
                                <span className={style.dialog__text}>Хорошо, то,<br />о чём мы договаривались.</span>
                            </div>
                            <div className={style.dialog__item}>
                                <span className={style.dialog__text}>Хорошо, то,<br />о чём мы договаривались.</span>
                            </div>
                            <div className={style.dialog__item_left + " " + style.dialog__item}>
                                <span className={style.dialog__text}>Oker.</span>
                            </div>
                        </div>

                        <div className={style.dialog__persons}>
                            <img src={urlPersons} alt="persons" />
                        </div>
                    </div>
                </div>


            </div>
            <div className={style.answer}>

            </div>
        </>

    );
}

export default Screen2Test;