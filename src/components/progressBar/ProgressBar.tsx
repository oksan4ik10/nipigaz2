import style from "./ProgressBar.module.css"
import urlImg1 from "../../assets/images/progress/1.svg"
import urlImg2 from "../../assets/images/progress/2.svg"
import urlImgActive1 from "../../assets/images/progress/1-active.svg"
import urlImgActive2 from "../../assets/images/progress/2-active.svg"
// import urlImg3 from "../../assets/images/progress/3.png"
// import urlImg4 from "../../assets/images/progress/4.png"

interface IProps {
    numTestQuestion: number;
}
function ProgressBar(props: IProps) {
    const { numTestQuestion } = props;

    const arrImages = [
        { img: urlImg1, imgActive: urlImgActive1 },
        { img: urlImg2, imgActive: urlImgActive2 },
    ]


    return (
        <div className={style.progress}>
            {arrImages.map((item, index) =>
                <div className={style.progress__item} key={index}>
                    <img src={(numTestQuestion - 1) < index ? item.img : item.imgActive} alt="pazzl1" />
                </div>)}





        </div>
    );
}

export default ProgressBar;