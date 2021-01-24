import React from "react";
import ReactDOM from "react-dom";

function App() {
  //utilizar um array
  /* quando utilizar um array para encapsular 
  os elementos, deve utilizar da key para 
  identificar cada elemento e não ter perca de 
  velocidade no site*/
  //ou utilizar div

  return [
    <h1 key="1">Título</h1>,
    <h2 key="2">texto</h2>,
    <p key="3">texto</p>
  ];
}

ReactDOM.render(<App />, document.getElementById("root"));
