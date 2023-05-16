import { useState, useEffect  } from "react";
import styleDark from "./ResultadoDark.module.css";
import styleLight from "./ResultadoLight.module.css";



function Resultado({theme,erro,inicio,conta,resultado}){

    
    const [classeStyle, setclassStyle] = useState(styleLight.resultado);

    const [classeStyle2, setclasseStyle2] = useState(0);


    document.addEventListener('DOMContentLoaded',() => {
        const elementoDaResposta = document.querySelector('article');
        function verificarQuantidadeCaracteres(){
            let conteudo = elementoDaResposta.textContent;
            let espaços = conteudo.split(" ");
            espaços = espaços.length -1;
            if(espaços !== 0){
                espaços = 1;
            }
            conteudo = conteudo.replace(/ /g, '');
            const qntDeChar = conteudo.length;
            setclasseStyle2(qntDeChar)
            console.log(classeStyle2)
            return
        }

        document.addEventListener('click touchstart', () => {
            verificarQuantidadeCaracteres()
            
        });
      });

    function condP(inicio){
        if (inicio === 0) {
            return <p></p>;
          } else {
            return <p>=</p>;
          }
          
    }
    function condError(erro){
        switch (erro) {
            case 1:
                return "DIGITE OS NÚMEROS PARA A OPERAÇÂO";

            case 2:
                return "ERROR NA CALCULADORA, OPERADOR INVALIDO";

            case 3:
                return "CALCULADORA DE APENAS DOIS NÚMEROS";

            case 4:
                return "ERROR NA CALCULADORA, OPERADOR INVALIDO";

            default:
                return
          }
    }

    return(
        <div className={styleDark.resultadoAll}>
            <section className={theme === 0 ? (erro>= 1 ? styleLight.error : styleLight.hid) : (erro>= 1 ? styleDark.error : styleDark.hid) }>{condError(erro)}</section>
            <section className={theme === 0 ? (classeStyle2 > 8 ?  styleLight.resultadoMenor : styleLight.resultado) : (classeStyle2 > 8 ?  styleDark.resultadoMenor : styleDark.resultado) } >
                <h1>{conta}</h1> 
                <article>{condP(inicio)}{resultado}</article>
            </section>
        </div>
    )
}

// Resultado.propTypes = {
//     conta: PropTypes.string.isRequired,
//     resultado: PropTypes.number,

// }

// Resultado.defaultProps = {
//     conta: "",
//     resultado: 0,
// }
export default Resultado