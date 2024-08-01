import { disablePageScroll } from 'scroll-lock';

import style from "./Screen3.module.css"
import urlContur from "../../assets/images/border-puzzle.svg"
import urlLogo from "../../assets/images/logo.png"
import urlImg1 from "../../assets/images/puzzle/1-answer.png"
import urlImg2 from "../../assets/images/puzzle/2-answer.png"
import urlImg3 from "../../assets/images/puzzle/3-answer.png"
import urlImg4 from "../../assets/images/puzzle/4-answer.png"
import { useEffect, useRef, useState } from "react"
interface IProps {
    changeScreen: () => void;
    dataContainerCoordinate: { top: number, left: number }
}

function Screen3(props: IProps) {
    const { dataContainerCoordinate } = props;


    const [dataPuzzleClass, setDataPazzlClass] = useState<string[]>([])
    useEffect(() => {
        setDataPazzlClass([style.puzzlePoz0, style.puzzlePoz1, style.puzzlePoz2, style.puzzlePoz3].sort(function () { return 0.5 - Math.random() }))
    }, [])
    const dataImages = [
        { id: 0, urlImg: urlImg1 }, { id: 1, urlImg: urlImg2 }, { id: 2, urlImg: urlImg3 }, { id: 3, urlImg: urlImg4 }
    ]

    const refPuzzle = useRef<HTMLDivElement>(null);
    const [dataPuzzleCoordinate, setDataPuzzleCoordinate] = useState({ top: 0, left: 0, height: 0, width: 0 })
    const refContur = useRef<HTMLDivElement>(null);
    const [answersCoordinate, setAnswersCoordinate] = useState<{ top: number, left: number }[]>([])
    console.log(answersCoordinate);

    useEffect(() => {
        const { current } = refPuzzle;
        const { current: currentContur } = refContur;
        if (current && currentContur) {
            const data = current.getBoundingClientRect();
            setDataPuzzleCoordinate({
                top: data.top,
                left: data.left,
                height: data.height,
                width: data.width
            })
            const dataContur = currentContur.getBoundingClientRect();

            const leftContur = dataContur.left - data.left;
            const topContur = dataContur.top - data.top;

            setAnswersCoordinate([
                { top: topContur, left: leftContur + 1 },
                { top: topContur, left: leftContur + 136 + 8 - 0.3 },
                { top: topContur + 115, left: leftContur },
                { top: topContur + 144 - 1, left: leftContur + 115 }
            ])


        }

    }, [])

    const [isWin, setIsWin] = useState(false);
    let targetDrag: HTMLElement | undefined;
    const [userAnswer, setUserAnswer] = useState(0);

    const startTouch = (e: React.TouchEvent<HTMLSpanElement>) => {
        const target = e.changedTouches[0].target as HTMLElement;
        disablePageScroll();
        targetDrag = target.closest(`.${style.puzzle__item}`) as HTMLElement;
        if (targetDrag) {
            const idTarget = targetDrag.getAttribute("data-id");
            if (idTarget === "-1") {
                targetDrag = undefined;
                return;
            }
            targetDrag.style.left = targetDrag.offsetLeft + "px"
            targetDrag.style.top = targetDrag.offsetTop + "px"
            targetDrag.style.bottom = "auto"
            targetDrag.style.right = "auto"
            targetDrag.style.zIndex = "3"

        }


    }

    const moveTouch = (e: React.TouchEvent<HTMLSpanElement>) => {

        if (!targetDrag) return
        const { clientX, clientY } = e.changedTouches[0];
        const widthTarget = targetDrag.offsetWidth;
        const heightTarget = targetDrag.offsetHeight;
        let y = clientY - dataPuzzleCoordinate.top - heightTarget / 2;
        let x = clientX - dataPuzzleCoordinate.left - (widthTarget / 2);
        if (x < -16) x = -16;
        if (x + widthTarget / 2 > dataPuzzleCoordinate.width + 16 - widthTarget / 2) {
            x = dataPuzzleCoordinate.width + 16 - widthTarget;
        }
        if (y < 0) y = 0;
        if (y + heightTarget / 2 > dataPuzzleCoordinate.height - heightTarget / 2) {
            y = dataPuzzleCoordinate.height - heightTarget;
        }
        targetDrag.style.top = y + "px";
        targetDrag.style.left = x + "px";


    }
    const endTouch = () => {
        if (!targetDrag) return;
        const idTarget = targetDrag.getAttribute("data-id");
        const idAnswer = idTarget ? +idTarget : -1;
        const xAnswer = parseFloat(targetDrag.style.left)
        const yAnswer = parseFloat(targetDrag.style.top)
        const answerCoordinate = answersCoordinate[idAnswer]
        if ((answerCoordinate.top - 35 < yAnswer) && (answerCoordinate.top + 35 > yAnswer) && (answerCoordinate.left - 35 < xAnswer) && (answerCoordinate.left + 35 > xAnswer)) {
            targetDrag.style.left = answerCoordinate.left + "px";
            targetDrag.style.top = answerCoordinate.top + "px";
            targetDrag.style.zIndex = "1";
            targetDrag.setAttribute("data-id", "-1");
            if (userAnswer === 3) {
                setIsWin(true);
                return

            }
            setUserAnswer(userAnswer + 1);
            return
        }
        targetDrag.style.zIndex = "2"



    }


    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__content}>
                <h3 className={style.title + " " + style.text}>Собери пазл, перетаскивая<br />его части на игровое поле.<br />Тогда ты узнаешь, в чём секрет<br />дружного коллектива НИПИГАЗа!</h3>
                <div className={style.puzzle} ref={refPuzzle}>
                    <div className={style.puzzle__contur} ref={refContur}>
                        {!isWin && <img src={urlContur} alt="contur" />}
                        {isWin && <div className={style.puzzle__logo}>
                            <img src={urlLogo} alt="logo" />
                        </div>}
                        {dataImages.map((item, index) => <div key={item.id} data-id={index} className={`${style.puzzle__item} ${style[`puzzle${index}`]} ${dataPuzzleClass[index]}`}
                            onTouchStart={startTouch}
                            onTouchMove={moveTouch}
                            onTouchEnd={endTouch}
                        >

                            <img src={item.urlImg} alt={`puzzle${index}`} draggable="false" />
                        </div>)}

                    </div>

                </div>
            </div>


        </div>
    );
}

export default Screen3;