// {useState} é um hooks
import React, { useState } from "react";
import ReactDOM from "react-dom";
//utilizando state
/* função simples 
mostrando como trabalhar com mudança de estado*/
//primeiro pasa o useState na importação do React
/*segundo cria uma constante tipo array com dois indice
 *o primeiro indice mostra o estado
 *o segundo indice é a função para mundaça do estado
 */
function App() {
  //const myState = useState("Não");
  const [status, setState] = useState("Não");
  return (
    <div>
      <p>O botão foi Clicado? {status}</p>
      <button
        onClick={() => {
          setState("Sim");
        }}
      >
        clique
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
