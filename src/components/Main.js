import { useState } from "react";
import styles from "./Main.module.css";
import styleDark from "./MainThemeDark.module.css";
import styleLight from "./MainThemeLight.module.css";
import Resultado from "./Resultado";
import Keyboard from "./Keyboard";
import Footer from "./Footer";
import { type } from "@testing-library/user-event/dist/type";

function Main() {
    
  const [valor, setValor] = useState("0");
  const [iniC, setIni] = useState(0);
  const [calculo, setCalculo] = useState();
  const [erro, setErro] = useState(0);
  const [mode, setMode] = useState(0);
  

  function keyPressed(e) {
    setErro(0);

    // IF PARA DITAR QUANDO O '=' VAI APARECER NO VISOR E TRATAMENTO DE ALGUNS POSSIVEIS ERROS NA HORA DA OPERAÇÃO
    if (iniC === 0 && (!isNaN(e) || e === "(" || e === ")" || e === "MAIS" || e === "MENOS")) {
      if(e === "MAIS"){
        setIni(1);  
        return setValor("+");
      } else if(e === "MENOS"){
        setIni(1);
        return setValor("-")
      }
      setIni(1);
      return setValor(e);
    } 
    else if(e === "MOON" || e === "SUN"){
        setTheme(e)
        return
    }
    else if ((iniC === 0 && e === ".")) {
        setErro(1);
        return
    } else if(valor === "0" && e === "IGUALAR"){
      return
    }
//////////////////////////////////////////////////////////////////////////////////////////

// IF PARA TRATAR AS FUNÇÕES DOS BOTÕES DA CALCULADORA ////////////////////////////////////
    if ((e === "MULTIPLICADOR" || e === "DIVISOR" || e === "MENOS" || e === "MAIS")) {
      
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
      }

    } 
    
    else if (e === "RESET") {
      setIni(0);
      setValor('0');
      setCalculo();
    } 
    
    else if (e === "IGUALAR") {
        setCalculo(valor);
        setValor(`${calcular(valor)}`);
    } 
    
    else if (e === "DEL") {

      if (valor.length === 1) {
        setIni(0);
        setValor('0');
      } 
      
      else {
        setValor(removeUltimoChar(valor));
      }

    }
    
    else {
      return setValor(valor + e);
    }
  }
//////////////////////////////////////////////////////////////////////////////

// FUNÇÃO PARA CALCULAR //////////////////////////////////////////////////////
  function calcular(e) {
    let arrayStr = e.split("");
    arrayStr.forEach((element, index) => {
      if(element === '×'){
        arrayStr[index] = '*';
      }
      if(element === '÷'){
        arrayStr[index] = '/';
      }
    });
    arrayStr = arrayStr.join("");
    try {
      if(!isNaN(eval(arrayStr))){
        return (eval(arrayStr));
      } else {
        setErro(3);
        setCalculo();
        return e
      }
      
    } catch (error) {
      setErro(3);
      setCalculo();
      return e
    }

  }
//////////////////////////////////////////////////////////////////////////////

// FUNÇÃO PARA REMOVER O ULTIMO CARACTER DO VALOR //////////////////////////////
  function removeUltimoChar(e) {
    const str = e;
    return str.slice(0, -1).trim();
  }
//////////////////////////////////////////////////////////////////////////////  

// FUNÇÃO PARA APLICAR A COR DE FUNDO //////////////////////////////////////////////////////
  function setTheme(e){
    if(e === "MOON"){
        setMode(1);
        document.body.style.backgroundImage = 'linear-gradient( 150deg, #292F32, #000000 )';       
        
    } 
    
    else if(e === "SUN"){
        setMode(0);
        document.body.style.backgroundImage = 'linear-gradient( 150deg, #FEFEFE, #a8acac )';
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////

  return (
    <main>
      <div className={mode === 0 ? styleLight.theme : styleDark.theme}>
        <Resultado theme={mode} erro={erro} inicio={iniC} conta={calculo} resultado={valor} />
        <Keyboard theme={mode} evento={keyPressed} />
      </div>
      <Footer/>
    </main>
  );
}

export default Main;
