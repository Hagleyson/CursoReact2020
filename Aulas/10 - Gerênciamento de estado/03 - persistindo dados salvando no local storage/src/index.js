import React, { useCallback, useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import counterReducer from "./state/counter/reducer";
//chamando actions de fora
import * as CounterActions from "./state/counter/actions.js";
function App() {
  //recebe dois parâmetros o reducer e o stado inicial
  //ele passa o state e a ação de despachar
  // a função é para pegar algo de for ou salvar localmente
  //nesse caso salvar o estado do contador no localStorage
  const [state, counterDispatch] = useReducer(
    counterReducer,
    0,
    (defaultState) => {
      //pegando do locaStorage
      //getitem para pegar o item "count" é a chave para o json
      //para transformar o arquivo json em js usa o JSON.parse
      const persistedState = JSON.parse(window.localStorage.getItem("count"));
      /*vai verificar se o primerio exite se for verdadeiro fara o primeiro 
      senão usará o segundo*/
      return persistedState ? persistedState : defaultState;
    }
  );
  //salvando no local storage
  useEffect(() => {
    //JSON.string converte de js para JSON
    localStorage.setItem("count", JSON.stringify(state));
  }, [state]);
  const [number, setNumber] = useState(0);
  const handleNumberChange = useCallback(
    (e) => {
      setNumber(e.target.value);
    },
    [setNumber]
  );
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
