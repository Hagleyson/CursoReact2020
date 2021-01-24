//segundo hook useCallback
import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

function App() {
  //sempre que for uma função de calback utilizar handleNome
  //ex handleCLick
  //utilizando useCallback
  /*Importante utilizar, Pois essa função permite que
  a função só execute quando necessário
  */
  let msg = "Mensagem";
  const handleClick = useCallback((txt) => {
    alert(txt);
  }, []);
  /* passar a variável no [] para funcionar 
  como escutador, ele guarda as dependências 
  */
  msg = "outra ";
  return (
    //clicked puxando da props do elemento button
    <div>
      <Button
        clicked={() => {
          handleClick(msg);
        }}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
