import React, { useState } from "react";

function Counter(props) {
  //props sendo passada como State
  const [counter, setCounter] = useState(props.initialValue);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}
export default Counter;
