import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import style from "./Screen3.module.css"
import urlContur from "../../assets/images/border-puzzle.svg"
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

    const dataPuzzleClass = [style.puzzlePoz0, style.puzzlePoz1, style.puzzlePoz2, style.puzzlePoz3].sort(function () { return 0.5 - Math.random() })
    const dataImages = [
        urlImg1, urlImg2, urlImg3, urlImg4
    ]

    const refPuzzle = useRef<HTMLDivElement>(null);
    const [dataPuzzleCoordinate, setDataPuzzleCoordinate] = useState({ top: 0, left: 0, height: 0, width: 0 })
    const refContur = useRef<HTMLDivElement>(null);
    const [answersCoordinate, setAnswersCoordinate] = useState<{ top: number, left: number }[]>([])
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
                { top: topContur, left: leftContur },
                { top: topContur, left: leftContur + 136 + 8 - 0.3 },
                { top: topContur + 115, left: leftContur },
                { top: topContur + 144 - 1, left: leftContur + 115 }
            ])


        }

    }, [])
    console.log(answersCoordinate);

    let targetDrag: HTMLElement | undefined;
    const [id, setId] = useState(-1);
    const startTouch = (e: React.TouchEvent<HTMLSpanElement>) => {
        const target = e.changedTouches[0].target as HTMLElement;
        disablePageScroll();
        console.log(target);

        targetDrag = target.closest(`.${style.puzzle__item}`) as HTMLElement;
        if (targetDrag) {
            targetDrag.style.left = targetDrag.offsetLeft + "px"
            targetDrag.style.top = targetDrag.offsetTop + "px"
            targetDrag.style.bottom = "auto"
            targetDrag.style.right = "auto"
            targetDrag.style.zIndex = "3"
            const idTarget = targetDrag.getAttribute("data-id")
            setId(idTarget ? +idTarget : -1)
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
    // const endTouch = ()=> {

    // }


    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__content}>
                <h3 className={style.title + " " + style.text}>Собери пазл, перетаскивая<br />его части на игровое поле.<br />Тогда ты узнаешь, в чём секрет<br />дружного коллектива НИПИГАЗа!</h3>
                <div className={style.puzzle} ref={refPuzzle}>
                    <div className={style.puzzle__contur} ref={refContur}>
                        <img src={urlContur} alt="contur" />
                        {dataImages.map((item, index) => <div key={index} data-id={index} className={`${style.puzzle__item} ${style[`puzzle${index}`]} ${dataPuzzleClass[index]}`}
                            onTouchStart={startTouch}
                            onTouchMove={moveTouch}
                        >

                            <img src={item} alt={`puzzle${index}`} draggable="false" />
                        </div>)}

                    </div>

                </div>
            </div>


        </div>
    );
}

export default Screen3;