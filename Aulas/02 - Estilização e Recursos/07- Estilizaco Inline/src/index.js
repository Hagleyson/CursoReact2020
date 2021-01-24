import React from "react";
import ReactDOM from "react-dom";
import Square from "./Square/Square";
import "./index.css";
function App() {
  //color red passando a cor que eu quero que fique
  return <Square color="#ccc" borderr="2px solid green" />;
}
ReactDOM.render(<App />, document.getElementById("root"));
