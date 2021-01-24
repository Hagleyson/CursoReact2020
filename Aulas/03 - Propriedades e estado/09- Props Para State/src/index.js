import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
function App() {
  //initialValue passando o valor inicial
  //props initialValue
  return <Counter initialValue={1000} />;
}
ReactDOM.render(<App />, document.getElementById("root"));
