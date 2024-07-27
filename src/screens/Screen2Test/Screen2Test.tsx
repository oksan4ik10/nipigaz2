
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo accusantium tempore in facilis tenetur saepe dolorum distinctio itaque natus rerum excepturi, voluptatem sed voluptatum deserunt ea quia, beatae illo adipisci id numquam omnis. Voluptate nisi, alias, dolores adipisci dignissimos deleniti, nobis ea modi explicabo eum velit. Sequi cum at maiores quasi dignissimos fugiat dolorem id vel vero amet facere blanditiis magni unde, sint, ratione velit repellat officia placeat minima natus delectus cupiditate. Harum voluptate velit, ea tempora eos consectetur, facilis natus magnam debitis praesentium ab cupiditate quis dignissimos voluptatem odit tempore saepe nulla quos omnis quod. Dolore, vel laboriosam!</p>
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