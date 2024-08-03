import style from "./ScreenBlur.module.css";

interface IProps {
    children: React.ReactNode;
    screen: boolean;
}


function ScreenBlur(props: IProps) {
    const { children, screen } = props;

    return (
        <>
            <div className={style.modal__dialog + " " + (!screen ? style.none : "")}>
                {children}
            </div>
        </>
    )
}

export default ScreenBlur;