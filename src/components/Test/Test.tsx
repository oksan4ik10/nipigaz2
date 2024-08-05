import { useState } from "react";
import { IDataTest } from "../../models/data-test";
import style from "./Test.module.css"

interface IProps {
    funCheckUserAnswer: (num: number) => void;
    isUserAnswer: boolean;
    data: IDataTest
}
function Test(props: IProps) {
    const { funCheckUserAnswer, isUserAnswer, data } = props;
    const [numChecked, setNumChecked] = useState(-1);
    const [isFirstClick, setIsFirstClick] = useState(false);

    const changeInput = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);

        if (!isFirstClick) setIsFirstClick(true)
        const target = e.target as HTMLInputElement;
        setNumChecked(+target.value)
    }

    const clickBtn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (numChecked === -1 || !isFirstClick) return
        setIsFirstClick(false)
        funCheckUserAnswer(numChecked)
    }

    return (
        <div className={style.test}>
            <h3 className={style.test__title} dangerouslySetInnerHTML={{ __html: data.question }}></h3>
            <form onSubmit={clickBtn} className={style.test__form}>
                <div className={style.test__answers}>
                    {data.answers.map((item, index) => <div key={index} className={style.test__item}>
                        <input checked={index === numChecked} disabled={isUserAnswer} onClick={changeInput} value={index} type="radio" id={`item${index}`} name="test" className={style.test__input + " " + ((!isUserAnswer && isFirstClick) ? style.test__inputChecked : "")} />
                        <label htmlFor={`item${index}`} className={style.test__label + " " + (isUserAnswer && item.win ? style.success : (isUserAnswer && (index === numChecked)) ? style.error : "")} dangerouslySetInnerHTML={{ __html: item.text }}>
                        </label>
                        {item.desc && isUserAnswer && (index !== numChecked) && <span className={style.test__desc} dangerouslySetInnerHTML={{ __html: item.desc }}></span>}
                    </div>)}


                </div>

                {!isUserAnswer && <button className={`${style.test__btn} btn`}>Ответить</button>}

            </form>

        </div>
    );
}

export default Test;