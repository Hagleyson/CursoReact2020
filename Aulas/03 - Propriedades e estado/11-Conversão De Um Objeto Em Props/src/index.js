import React from "react";
import ReactDOM from "react-dom";
import Order from "./Order";

const order = {
  food: "sorvete",
  flavor: "pave"
};
//tranformar chaves de um objeto em atributos
function App() {
  /*forma normal
   *<Order food={order.food} flavor={order.flavor} />
   */
  //transformando por destructin de um objeto
  // <Order {...order}
  return <Order {...order} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
