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
}

function Screen3(props: IProps) {
    const { changeScreen } = props;


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
        disablePageScroll()
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
            const topContur = 36;

            setAnswersCoordinate([
                { top: topContur, left: leftContur },
                { top: topContur, left: leftContur + 136 + 8 - 0.3 },
                { top: topContur + 113, left: leftContur },
                { top: topContur + 144 - 1, left: leftContur + 115 }
            ])
        }

    }, [])

    const [isWin, setIsWin] = useState(false);
    let targetDrag: HTMLElement | undefined;
    const [userAnswer, setUserAnswer] = useState(0);

    const startClick = useRef(false)
    const mouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        startClick.current = true;
        start(target)
    }
    const startTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        const target = e.changedTouches[0].target as HTMLElement;
        start(target)

    }
    const start = (target: HTMLElement) => {
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

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!startClick.current) return;
        move(e.pageX, e.pageY);
    }
    const moveTouch = (e: React.TouchEvent<HTMLSpanElement>) => {
        const { clientX, clientY } = e.changedTouches[0];
        move(clientX, clientY)

    }
    const move = (xTarget: number, yTarget: number) => {
        if (!targetDrag) return

        const widthTarget = targetDrag.offsetWidth;
        const heightTarget = targetDrag.offsetHeight;
        let y = yTarget - dataPuzzleCoordinate.top - heightTarget / 2;
        let x = xTarget - dataPuzzleCoordinate.left - (widthTarget / 2);
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
    const mouseEnd = () => {
        startClick.current = false;
        end();

    }
    const mouseOut = () => {
        if (!startClick.current) return;
        startClick.current = false;
        end();
    }
    const end = () => {
        if (!targetDrag) return;
        const idTarget = targetDrag.getAttribute("data-id");
        const idAnswer = idTarget ? +idTarget : -1;
        const xAnswer = parseFloat(targetDrag.style.left)
        const yAnswer = parseFloat(targetDrag.style.top)
        const answerCoordinate = answersCoordinate[idAnswer]
        if ((answerCoordinate.top - 50 < yAnswer) && (answerCoordinate.top + 50 > yAnswer) && (answerCoordinate.left - 50 < xAnswer) && (answerCoordinate.left + 50 > xAnswer)) {
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

    const endTouch = () => {
        end()
    }

    const nextScreen = () => {
        changeScreen();
    }


    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__content}>
                <h3 className={style.title + " " + style.text}>Собери пазл, перетаскивая<br />его части на игровое поле.<br />Тогда ты узнаешь, в чём секрет<br />дружного коллектива НИПИГАЗа!</h3>
                <div className={style.puzzle} ref={refPuzzle}>
                    <div className={style.puzzle__contur} >
                        {!isWin && <div className={style.puzzle__conturImg} ref={refContur}>
                            <img src={urlContur} alt="contur" />
                        </div>}

                        {isWin && <div className={style.puzzle__logo}>
                            <img src={urlLogo} alt="logo" />
                        </div>}
                        {dataImages.map((item, index) => <div key={item.id} data-id={index} className={`${style.puzzle__item} ${style[`puzzle${index}`]} ${dataPuzzleClass[index]}`}
                            onTouchStart={startTouch}
                            onTouchMove={moveTouch}
                            onTouchEnd={endTouch}
                            onMouseDown={mouseStart}
                            onMouseMove={mouseMove}
                            onMouseOut={mouseOut}
                            onMouseUp={mouseEnd}
                        >

                            <img src={item.urlImg} alt={`puzzle${index}`} draggable="false" />
                        </div>)}

                    </div>

                </div>
                <div className={style.win + " " + (!isWin ? style.none : "")}>
                    <h3 className={style.subtitle + " " + style.text}><b>Секрет дружного коллектива</b> —<br />взаимопомощь, поддержка<br />доверительные отношения и время,<br />которое коллеги любят проводить<br />вместе как на работе, так и после неё.</h3>
                    <button className="btn" onClick={nextScreen}>В команду</button>
                </div>
            </div>


        </div>
    );
}

export default Screen3;