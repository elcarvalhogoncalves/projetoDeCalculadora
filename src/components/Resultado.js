import { useState, useEffect, useRef  } from "react";
import styleDark from "./ResultadoDark.module.css";
import styleLight from "./ResultadoLight.module.css";



function Resultado({theme,erro,inicio,conta,resultado}){

    const [characteres, setCharacteres] = useState(0);
    const propRef = useRef(resultado);

// MANEIRA UTILIZADA PARA ALTERAR A VISUALIZAÇÃO DAS INFORMAÇÕES QUANDO ULTRAPASSAREM UM CERTO NÚMERO DE DIGITOS
    useEffect(() => {
        if (propRef.current !== resultado) {

            let resultadoLength = resultado;
            let espacos = resultadoLength.split(" ");
            if(espacos.length !== 1){
                resultadoLength = resultadoLength.length;
            } 
            else{
                resultadoLength = resultadoLength.length + 1;
            }
            setCharacteres(resultadoLength);
            propRef.current = resultado;
        }
      }, [resultado]);
//////////////////////////////////////////////////////////////////

// FUNÇÃO PARA CONTROLAR O '=' ////////////////////////////////////
    function condP(inicio){
        if (inicio === 0) {
            return <p></p>;
          } else {
            return <p>=</p>;
          }  
    }
//////////////////////////////////////////////////////////////////

// FUNÃO PARA APLICAR MENSAGEM DE ERRO ////////////////////////
    function condError(erro){
        switch (erro) {
            case 1:
                return "DIGITE OS NÚMEROS PARA A OPERAÇÂO";

            case 2:
                return "ERROR NA CALCULADORA, OPERADOR INVALIDO";

            case 3:
                return "EXPRESSÃO MAL FORMADA";

            case 4:
                return "ERROR NA CALCULADORA, OPERADOR INVALIDO";

            default:
                return
          }
    }
////////////////////////////////////////////////////////////
    return(
        <div className={styleDark.resultadoAll}>
            <section className={theme === 0 ? (erro>= 1 ? styleLight.error : styleLight.hid) : (erro>= 1 ? styleDark.error : styleDark.hid) }>{condError(erro)}</section>
            <section className={theme === 0 ? (characteres > 8 ?  styleLight.resultadoMenor : styleLight.resultado) : (characteres > 8 ?  styleDark.resultadoMenor : styleDark.resultado) } >
                <h1>{conta}</h1> 
                <article>{condP(inicio)}{resultado}</article>
            </section>
        </div>
    )
}

export default Resultado