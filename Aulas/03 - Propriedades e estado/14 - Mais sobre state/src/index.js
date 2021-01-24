import React, { useState } from "react";
import ReactDOM from "react-dom";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Você clicou {counter} vezes!</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Aumentar
      </button>
      <button
        onClick={() => {
          setCounter(counter - counter);
          console.log(counter);
        }}
      >
        Limpar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        Diminuir
      </button>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
