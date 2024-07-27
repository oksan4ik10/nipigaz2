
import ProgressBar from "../../components/progressBar/ProgressBar";
import style from "./Screen2Test.module.css"
import urlPersons from "../../assets/images/test1/people.png"
import Test from "../../components/Test/Test";

interface IProps {
    changeScreen: () => void
}


function Screen2Test(props: IProps) {
    const { changeScreen } = props;
    changeScreen();
    return (
        <>
            <div className={style.dialog}>
                <div className={style.dialog__wrapper}>
                    <div className={style.dialog__bg}></div>
                    <div className={style.dialog__content}>
                        <div className={style.dialog__progress}>
                            <ProgressBar></ProgressBar>
                        </div>
                        <div className={style.dialog__messages}>
                            <div className={style.dialog__item}>
                                <span className={style.dialog__text}>Хорошо, то,<br />о чём мы договаривались..</span>
                            </div>
                            <div className={style.dialog__item_left + " " + style.dialog__item}>
                                <span className={style.dialog__text}>Хорошо, то,<br />о чём мы договаривались.</span>
                            </div>
                            <div className={style.dialog__item}>
                                <span className={style.dialog__text}>Хорошо, то,<br />о чём мы договаривались.</span>
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
            <div className={style.test}>
                <Test></Test>
                <div className={style.test__answer}>

                    <div className={style.test__answerText}><p>Верно, это же <b>форма для баскетбола!</b> Перед матчем Никита раздаст всем членам команды комплекты с новым дизайном.

                        Сотрудники НИПИГАЗа часто вместе занимаются спортом после работы — играют в футбол, волейбол, тренируются в беговом клубе.</p>
                        <p>Верно, это же <b>форма для баскетбола!</b> Перед матчем Никита раздаст всем членам команды комплекты с новым дизайном.

                            Сотрудники НИПИГАЗа часто вместе занимаются спортом после работы — играют в футбол, волейбол, тренируются в беговом клубе.</p>
                    </div>
                    <button className={`btn ${style.test__btn}`}>Забрать пазл</button>
                </div>
            </div>

        </>

    );
}

export default Screen2Test;