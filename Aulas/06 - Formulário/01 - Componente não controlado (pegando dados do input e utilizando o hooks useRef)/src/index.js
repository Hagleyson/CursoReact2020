import React, { useCallback, useRef } from "react";
import ReactDOM from "react-dom";
function App() {
  const inputName = useRef(null);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(inputName.current.value);
    inputName.current.value = "";
  }, []);
  return (
    /*hrmlFor está referênciando para o 
    input com id name*/
    /*pode usar <label><input/></label> tem o mesmo 
    efeito*/
    /*autoComplete="" serve para não aparecer os 
    dados que ja foram digitados no input*/

    /* o REF dentro do input 
    está referenciando para o inputName*/
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input id="name" ref={inputName} type="text" autoComplete="off" />
        <input type="submit" value="Mostrar" />
      </form>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
