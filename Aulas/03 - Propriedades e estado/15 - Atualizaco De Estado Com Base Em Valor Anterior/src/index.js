import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Botton from "./Botton";
import Square from "./Square/Square";
function App() {
  const [visibility, setVisibility] = useState(true);

  const handleClick = useCallback(() => {
    /*Como o state é assicrono se fazer um state 
    baseado no state anterior Ex: setVisibility(!visibily) o reacty 
    não garante que va funcionar. O correto é utilizar uma função dentro 
    do setVisibility da forma a baixo para garantir que tudo vai ocorrer 
    como deve.    
    */
    setVisibility((prev) => {
      return !prev;
    });
  }, [setVisibility]);
  return (
    <div>
      <Botton clicked={handleClick} title="mostrar/ocultar" />
      <Square show={visibility} />
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
