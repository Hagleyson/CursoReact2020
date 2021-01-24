import React, { useCallback, useReducer } from "react";
import ReactDOM from "react-dom";
import counterReducer from "./state/counter/reducer";
//chamando actions de fora
import * as CounterActions from "./state/counter/actions.js";
function App() {
  //recebe dois parâmetros o reducer e o stado inicial
  //ele passa o state e a ação de despachar
  const [state, counterDispatch] = useReducer(counterReducer, 0);
  const handleIncrease = useCallback(() => {
    counterDispatch(CounterActions.increment);
  }, []);
  const handleDecrement = useCallback(() => {
    counterDispatch(CounterActions.decrement);
  }, []);
  const handleLimpar = useCallback(() => {
    counterDispatch(CounterActions.zerar);
  }, []);
  return (
    <>
      <h1>Contador: {state}</h1>
      <button onClick={handleIncrease}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleLimpar}>Limpar</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
