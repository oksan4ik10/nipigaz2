import { useEffect, useRef, useState } from "react";


import ProgressBar from "../../components/progressBar/ProgressBar";
import style from "./Screen2Test.module.css"


import Test from "../../components/Test/Test";
import { IDataTest } from "../../models/data-test";
import data from "../../data/testData.json"

import urlPersons from "../../assets/images/test1/people.png"
import urlPuzzle1 from "../../assets/images/progress/1-answer.png"

interface IProps {
    changeScreen: () => void
    changeScroll: (val: boolean) => void

}


function Screen2Test(props: IProps) {
    const { changeScreen, changeScroll } = props;
    const [isUserAnswer, setIsUserAnswer] = useState(false);
    const [numTestQuestion, setTestQuestion] = useState(0);
    const [userNumAnswer, setUserNumAnswer] = useState(-1);

    const [dataTest, setDataTest] = useState<IDataTest>();
    const funCheckUserAnswer = (num: number) => {
        setIsUserAnswer(true);
        setUserNumAnswer(num);

        setTimeout(() => {
            if (btnRef.current) btnRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
        })


    }
    useEffect(() => {
        setDataTest(data[numTestQuestion]);
    }, [])

    const nextAnswerMove = () => {
        const nextAnswer = numTestQuestion + 1;
        if (nextAnswer === 2) {
            changeScreen()
            return;
        }
        setUserNumAnswer(-1);
        setTestQuestion(nextAnswer)
        setDataTest(data[nextAnswer])
        setIsUserAnswer(false)
        changeScroll(false)
        setIsAnimationPuzzle(false);
        if (dialogRef.current) dialogRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
    }

    const [isAnimationPuzzle, setIsAnimationPuzzle] = useState(false)
    const clickBtn = () => {
        setIsAnimationPuzzle(true);
        changeScroll(true)
        setTimeout(() => nextAnswerMove(), 5500)

    }

    const btnRef = useRef<HTMLButtonElement>(null)
    const dialogRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className={style.wrapper + " " + (isAnimationPuzzle ? style.animation : "")}>
                <div className={style.progress + " " + (isAnimationPuzzle ? style.animation : "")}>
                    <ProgressBar></ProgressBar>
                </div>
                <div className={style.puzzle + " " + (isAnimationPuzzle ? style.animation : "")}>
                    <img src={urlPuzzle1} alt="puzzle" />
                </div>
                <div className={style.dialog} ref={dialogRef}>
                    <div className={style.dialog__wrapper}>
                        <div className={style.dialog__bg}></div>
                        <div className={style.dialog__content}>

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
                    {dataTest && <Test funCheckUserAnswer={funCheckUserAnswer} isUserAnswer={isUserAnswer} data={dataTest}></Test>}
                    {isUserAnswer && dataTest && <div className={style.test__answer}>

                        <div className={style.test__answerText} dangerouslySetInnerHTML={{ __html: dataTest.answers[userNumAnswer].userText }}>
                        </div>
                        <div className={style.test__click + " " + (isAnimationPuzzle ? style.animation : "")}>

                            <button ref={btnRef} onClick={clickBtn} className={`btn ${style.test__btn}`}>Забрать пазл</button>
                        </div>

                    </div>}
                </div>
            </div>


        </>

    );
}

export default Screen2Test;