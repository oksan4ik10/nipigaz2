import style from "./ProgressBar.module.css"
import urlImg1 from "../../assets/images/progress/1.svg"
// import urlImg2 from "../../assets/images/progress/2.png"
// import urlImg3 from "../../assets/images/progress/3.png"
// import urlImg4 from "../../assets/images/progress/4.png"

function ProgressBar() {
    return (
        <div className={style.progress}>
            <div className={style.progress__item}>
                <img src={urlImg1} alt="pazzl1" />
            </div>
            <div className={style.progress__item}>
                <img src={urlImg1} alt="pazzl2" />
            </div>
            <div className={style.progress__item}>
                <img src={urlImg1} alt="pazzl3" />
            </div>
            <div className={style.progress__item}>
                <img src={urlImg1} alt="pazzl4" />
            </div>



        </div>
    );
}

export default ProgressBar;