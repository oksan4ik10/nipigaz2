import style from "./Test.module.css"
function Test() {
    return (
        <div className={style.test}>
            <h3 className={style.test__title}>Никита подходит к столу, тянется к ящику… Что будет дальше?</h3>
            <form className={style.test__form}>
                <div className={style.test__answers}>
                    <div className={style.test__item}>
                        <input type="radio" checked id="item1" name="test" className={style.test__input} />
                        <label htmlFor="item1" className={style.test__label + " " + style.success}>
                            Он достанет толстую папку с отчётом по аналитике, который нужно успеть сдать в срок.
                        </label>
                        <span className={style.test__desc}>О важном разговоре с коллегой Никита не забыл. Встречу перенесли на понедельник, чтоб было больше времени для обсуждения всех деталей проекта.</span>
                    </div>
                    <div className={style.test__item}>
                        <input type="radio" id="item2" name="test" className={style.test__input} />
                        <label htmlFor="item2" className={style.test__label}>
                            Он достанет толстую папку с отчётом по аналитике, который нужно успеть сдать в срок.
                        </label>
                        <span className={style.test__desc}>О важном разговоре с коллегой Никита не забыл. Встречу перенесли на понедельник, чтоб было больше времени для обсуждения всех деталей проекта.</span>
                    </div>
                    <div className={style.test__item}>
                        <input type="radio" id="item3" name="test" className={style.test__input} />
                        <label htmlFor="item3" className={style.test__label}>
                            Он достанет толстую папку с отчётом по аналитике, который нужно успеть сдать в срок.
                        </label>
                        <span className={style.test__desc}>О важном разговоре с коллегой Никита не забыл. Встречу перенесли на понедельник, чтоб было больше времени для обсуждения всех деталей проекта.</span>
                    </div>
                </div>

                <button className={`${style.test__btn} btn`}>Ответить</button>

            </form>

        </div>
    );
}

export default Test;