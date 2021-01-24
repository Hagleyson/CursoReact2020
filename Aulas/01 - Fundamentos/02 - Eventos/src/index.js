import React from "react";
import ReactDOM from "react-dom";

function App() {
  //abaixo não e html e JSX.
  //codigo javaScript tem que ser passado dentro de chaves
  // exemplo onClick={() =>{} }
  //return com multiplas linhas usar parênteses
  // evt o react mudou o event do js puro
  return (
    <button
      onClick={(evt) => {
        console.log(evt);
      }}
    >
      Clique Aqui!
    </button>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
