import { useState } from "react";
import styles from "./Main.module.css";
import styleDark from "./MainThemeDark.module.css";
import styleLight from "./MainThemeLight.module.css";
import Resultado from "./Resultado";
import Keyboard from "./Keyboard";
import Footer from "./Footer";

function Main() {
    
  const [valor, setValor] = useState(0);
  const [iniC, setIni] = useState(0);
  const [calculo, setCalculo] = useState();
  const [cont, setCont] = useState(0);
  const [erro, setErro] = useState(0);
  const [mode, setMode] = useState(0);
  const [modeTheme, setModeTheme] = useState(styleLight.theme);

  function keyPressed(e) {
    setErro(0);
    if (iniC === 0 && !isNaN(e)) {
      setIni(1);
      return setValor(e);
    } else if (iniC === 0 && isNaN(e)) {
        e === "MOON" || e === "SUN" ?  setTheme(e) : setErro(1);
        return
    }

    if (
      (e === "MULTIPLICADOR" ||
        e === "DIVISOR" ||
        e === "MENOS" ||
        e === "MAIS") &&
      cont === 0
    ) {
      setCont(1);
      switch (e) {
        case "MULTIPLICADOR":
          setValor(valor + " × ");
          break;
        case "DIVISOR":
          setValor(valor + " ÷ ");
          break;
        case "MENOS":
          setValor(valor + " - ");
          break;
        case "MAIS":
          setValor(valor + " + ");
          break;
        default:
          setErro(2);
        // console.log("(D) ERROR NA CALCULADORA, OPERADOR INVALIDO")
      }
    } else if (
      (e === "MULTIPLICADOR" ||
        e === "DIVISOR" ||
        e === "MENOS" ||
        e === "MAIS") &&
      cont === 1
    ) {
      setErro(3);
      // console.log("Calculadora de dois números")
    } else if (e === "RESET") {
      setIni(0);
      setValor(0);
      setCont(0);
      setCalculo();
    } else if (e === "IGUALAR") {
      if (cont === 1) {
        setCalculo(valor);
        setCont(0);
        setValor(`${calcular(valor)}`);
      } else {
        return;
      }
    } else if (e === "DEL") {
      if (valor.length > 1 && isNaN(valor[valor.length - 1])) {
        setCont(0);
      }
      if (valor.length === 1) {
        setIni(0);
        setValor(0);
        setCont(0);
      } else {
        setValor(removeUltimoChar(valor));
      }
    } else if(e === "MOON" || e === "SUN"){
        (e === "MOON" ? setTheme("MOON") : setTheme("SUN"));
        
    } else {
      return setValor(valor + e);
    }
  }

  function calcular(e) {
    const stringBreak = e.split(" ");
    switch (stringBreak[1]) {
      case "×":
        return (Number(stringBreak[0]) * Number(stringBreak[2])).toString().split(".").length === 1 || ((Number(stringBreak[0]) * Number(stringBreak[2])).toString().split(".")[1].length < 2) ? (Number(stringBreak[0]) * Number(stringBreak[2])) : ((Number(stringBreak[0]) * Number(stringBreak[2])).toFixed(2));
      case "÷":
        return (Number(stringBreak[0]) / Number(stringBreak[2])).toString().split(".").length === 1 || ((Number(stringBreak[0]) / Number(stringBreak[2])).toString().split(".")[1].length < 2) ? (Number(stringBreak[0]) / Number(stringBreak[2])) : ((Number(stringBreak[0]) / Number(stringBreak[2])).toFixed(2));
      case "-":
        return (Number(stringBreak[0]) - Number(stringBreak[2])).toString().split(".").length === 1 || ((Number(stringBreak[0]) - Number(stringBreak[2])).toString().split(".")[1].length < 2) ? (Number(stringBreak[0]) - Number(stringBreak[2])) : ((Number(stringBreak[0]) - Number(stringBreak[2])).toFixed(2));
      case "+":
        return (Number(stringBreak[0]) + Number(stringBreak[2])).toString().split(".").length === 1 || ((Number(stringBreak[0]) + Number(stringBreak[2])).toString().split(".")[1].length < 2) ? (Number(stringBreak[0]) + Number(stringBreak[2])) : ((Number(stringBreak[0]) + Number(stringBreak[2])).toFixed(2));
      default:
        setErro(4);
      // console.log("(C) ERROR NA CALCULADORA, OPERADOR INVALIDO");
    }
  }

  function removeUltimoChar(e) {
    const str = e;
    return str.slice(0, -1).trim();
  }

  function setTheme(e){
    if(e === "MOON"){
        setMode(1);
        document.body.style.backgroundImage = 'linear-gradient( 150deg, #292F32, #000000 )';       
        
    } else if(e === "SUN"){
        setMode(0);
        document.body.style.backgroundImage = 'linear-gradient( 150deg, #FEFEFE, #a8acac )';
    }
    return 
  }

  return (
    <main>

    <div className={mode === 0 ? styleLight.theme : styleDark.theme}>
            <Resultado theme={mode} erro={erro} inicio={iniC} conta={calculo} resultado={valor} />
            <Keyboard theme={mode} evento={keyPressed} />
            
    </div>
    <Footer />

    </main>
  );
}

export default Main;
