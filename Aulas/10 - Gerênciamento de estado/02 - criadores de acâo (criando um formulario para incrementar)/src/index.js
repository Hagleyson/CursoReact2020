import React, { useCallback, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import counterReducer from "./state/counter/reducer";
//chamando actions de fora
import * as CounterActions from "./state/counter/actions.js";
function App() {
  //recebe dois parâmetros o reducer e o stado inicial
  //ele passa o state e a ação de despachar
  const [state, counterDispatch] = useReducer(counterReducer, 0);
  const [number, setNumber] = useState(0);
  const handleNumberChange = useCallback((e) => {
    setNumber(e.target.value);
  }, setNumber);
  const handleIncrease = useCallback(() => {
    counterDispatch(CounterActions.increment(number));
  }, [counterDispatch, number]);
  const handleDecrement = useCallback(() => {
    counterDispatch(CounterActions.decrement(number));
  }, [counterDispatch, number]);
  const handleLimpar = useCallback(() => {
    counterDispatch(CounterActions.zerar);
  }, [counterDispatch]);
  return (
    <>
      <h1>Contador: {state}</h1>
      <input type="number" value={number} onChange={handleNumberChange} />
      <button onClick={handleIncrease}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleLimpar}>Limpar</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
