import { useState, useEffect } from "react";
import styles from "./Keyboard.module.css";
import styleLight from "./KeyboardThemeLight.module.css";
import styleDark from "./KeyboardThemeDark.module.css";


import modeMoonWhite from "../images/moon-white.svg";
import modeMoonBlack from "../images/moon.svg";
import modeSunWhite from "../images/sun-white.svg";
import modeSunBlack from "../images/sun.svg";
import BackSpaceWhite from '../images/backspace-white.svg';
import BackSpaceBlack from '../images/backspace.svg';
import SunBlack from '../images/sun.svg';



function Keyboard(props){
    // const [classeStyleItem, setclassStyleItem] = useState((props.theme === 0 ? styleLight:styleDark));
    // props.theme === 0 ? styleLight.item : styleDark.item
    function pressKey(e){
        props.evento(e.target.attributes.getNamedItem('value').value)
    }
    
    function tema(e){
        const tema = e === 0 ? styleLight: styleDark
        return tema
    }   

    // useEffect(() => {
    //     props.theme === 0 ? setclassStyleItem(styleLight) : setclassStyleItem(styleDark)
    //   }, [props.theme]);


    return(
        <div className={styles.keyboard}>

            <div className={styles.grid_container}>           
                <button onClick={pressKey} value="RESET" className={`${(tema(props.theme)).item} ${styles.resetar} ${(tema(props.theme)).style_resetar}`}>C</button>
                <button onClick={pressKey} value={`${props.theme === 0 ? "MOON" : "SUN"}`} className={`${(tema(props.theme)).item} ${styles.r} ${(tema(props.theme)).style_mode}`}><img src={props.theme === 0 ? modeMoonWhite : modeSunBlack} value={`${props.theme === 0 ? "MOON" : "SUN"}`} /></button>
                {/* {<div className={`${styles.item} ${styles.b}`}>SE</div>} */}
                {/* <div className={`${styles.item} ${styles.b}`}>TAR</div> */}
                <button onClick={pressKey} value="MULTIPLICADOR" className={`${(tema(props.theme)).item} ${styles.b} ${(tema(props.theme)).lilas}`}>×</button>
                <button onClick={pressKey} value="7" className={`${(tema(props.theme)).item} ${styles.c}`}>7</button>
                <button onClick={pressKey} value="8" className={`${(tema(props.theme)).item} ${styles.d}`}>8</button>
                <button onClick={pressKey} value="9" className={`${(tema(props.theme)).item} ${styles.e}`}>9</button>
                <button onClick={pressKey} value="DIVISOR" className={`${(tema(props.theme)).item} ${styles.f} ${(tema(props.theme)).lilas}`}>÷</button>
                <button onClick={pressKey} value="4" className={`${(tema(props.theme)).item} ${styles.g}`}>4</button>
                <button onClick={pressKey} value="5" className={`${(tema(props.theme)).item} ${styles.h}`}>5</button>
                <button onClick={pressKey} value="6" className={`${(tema(props.theme)).item} ${styles.i}`}>6</button>
                <button onClick={pressKey} value="MENOS" className={`${(tema(props.theme)).item} ${styles.j} ${(tema(props.theme)).lilas}`}>-</button>
                <button onClick={pressKey} value="1" className={`${(tema(props.theme)).item} ${styles.k}`}>1</button>
                <button onClick={pressKey} value="2" className={`${(tema(props.theme)).item} ${styles.l}`}>2</button>
                <button onClick={pressKey} value="3" className={`${(tema(props.theme)).item} ${styles.m}`}>3</button>
                <button onClick={pressKey} value="MAIS" className={`${(tema(props.theme)).item} ${styles.n} ${(tema(props.theme)).lilas}`}>+</button>
                <button onClick={pressKey} value="DEL" className={`${(tema(props.theme)).item} ${styles.o}`}><img src={props.theme === 0 ? BackSpaceBlack : BackSpaceWhite} value="DEL" /></button>
                <button onClick={pressKey} value="0" className={`${(tema(props.theme)).item} ${styles.p}`}>0</button>
                <button onClick={pressKey} value="IGUALAR" className={`${(tema(props.theme)).item} classeStyleItem ${styles.igualar} ${(tema(props.theme)).style_igualar}`}>=</button>
                {/* <div className={styles.item}>LAR</div> */}
            </div>
        </div>
    )
}

export default Keyboard