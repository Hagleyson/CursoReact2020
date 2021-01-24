import React, { useState } from "react";
import ReactDOM from "react-dom";
import ColorRedSquare from "./ColorRedSquare";
import ColorizerButton from "./ColorizerButton";
function App() {
  //state
  const [color, setColor] = useState("black");
  return (
    //passando a state como props color={color}
    <div>
      <h1>{color}</h1>
      <ColorRedSquare color={color} />
      <ColorizerButton
        title="vemelho"
        clicked={() => {
          setColor("red");
        }}
      />
      <ColorizerButton
        title="Azul"
        clicked={() => {
          setColor("blue");
        }}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
