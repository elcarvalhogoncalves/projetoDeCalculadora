import { useState, useEffect } from "react";
import styles from "./Keyboard.module.css";
import styleLight from "./KeyboardThemeLight.module.css";
import styleDark from "./KeyboardThemeDark.module.css";
import BackSpaceWhite from '../images/backspace-white.svg';
import BackSpaceBlack from '../images/backspace.svg';


function Keyboard(props){
// FUNÇÃO PARA CHAMAR FUNÇÃO QUE PERTENCE AO MAIN ////////////    
    function pressKey(e){
        props.evento(e.target.attributes.getNamedItem('value').value)
    }
    

// FUNÇÃO PARA CONTROLE DO TEMA //////////////////////////////
    function tema(e){
        const tema = e === 0 ? styleLight: styleDark
        return tema
    }   
////////////////////////////////////////////////////////////

    return(
        <div className={styles.keyboard}>
            <div><button onClick={pressKey} value={`${props.theme === 0 ? "MOON" : "SUN"}`} className={`${(tema(props.theme)).style_mode} ${props.theme === 0 ? (styleLight.style_mode_align_start) : (styleDark.style_mode_align_end)}`}></button></div>
            <div className={styles.grid_container}>           
                <button onClick={pressKey} value="RESET" className={`${(tema(props.theme)).item} ${styles.resetar} ${(tema(props.theme)).style_resetar}`}>C</button>
                <button onClick={pressKey} value="MULTIPLICADOR" className={`${(tema(props.theme)).item} ${styles.b} ${(tema(props.theme)).lilas}`}>×</button>
                {/* <button onClick={pressKey} value="RAIZ" className={`${(tema(props.theme)).item} ${styles.v}`}>√</button> */}
                <button onClick={pressKey} value="(" className={`${(tema(props.theme)).item} ${styles.t} ${(tema(props.theme)).laranja}`}>{'('}</button>
                <button onClick={pressKey} value=")" className={`${(tema(props.theme)).item} ${styles.u} ${(tema(props.theme)).laranja}`}>{")"}</button>
                <button onClick={pressKey} value="DIVISOR" className={`${(tema(props.theme)).item} ${styles.f} ${(tema(props.theme)).lilas}`}>÷</button>
                <button onClick={pressKey} value="7" className={`${(tema(props.theme)).item} ${styles.c}`}>7</button>
                <button onClick={pressKey} value="8" className={`${(tema(props.theme)).item} ${styles.d}`}>8</button>
                <button onClick={pressKey} value="9" className={`${(tema(props.theme)).item} ${styles.e}`}>9</button>
                <button onClick={pressKey} value="MENOS" className={`${(tema(props.theme)).item} ${styles.j} ${(tema(props.theme)).lilas}`}>-</button>
                <button onClick={pressKey} value="4" className={`${(tema(props.theme)).item} ${styles.g}`}>4</button>
                <button onClick={pressKey} value="5" className={`${(tema(props.theme)).item} ${styles.h}`}>5</button>
                <button onClick={pressKey} value="6" className={`${(tema(props.theme)).item} ${styles.i}`}>6</button>
                <button onClick={pressKey} value="MAIS" className={`${(tema(props.theme)).item} ${styles.n} ${(tema(props.theme)).lilas}`}>+</button>
                <button onClick={pressKey} value="1" className={`${(tema(props.theme)).item} ${styles.k}`}>1</button>
                <button onClick={pressKey} value="2" className={`${(tema(props.theme)).item} ${styles.l}`}>2</button>
                <button onClick={pressKey} value="3" className={`${(tema(props.theme)).item} ${styles.m}`}>3</button>
                <button onClick={pressKey} value="IGUALAR" className={`${(tema(props.theme)).item} ${styles.igualar} ${(tema(props.theme)).style_igualar}`}>=</button>
                <button onClick={pressKey} value="." className={`${(tema(props.theme)).item} ${styles.dot}`}>.</button>
                <button onClick={pressKey} value="0" className={`${(tema(props.theme)).item} ${styles.p}`}>0</button>
                <button onClick={pressKey} value="DEL" className={`${(tema(props.theme)).item} ${styles.o}`}><img src={props.theme === 0 ? BackSpaceBlack : BackSpaceWhite} value="DEL" /></button>
            </div>
        </div>
    )
}

export default Keyboard