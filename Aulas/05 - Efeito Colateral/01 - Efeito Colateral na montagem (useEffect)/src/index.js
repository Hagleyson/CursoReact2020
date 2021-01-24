import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";

function randomNumber() {
  //Math.ceil arredonda pra cima
  //Math.random gera número aleatório
  // multiplica por 60 para gerar números ate 60
  return Math.ceil(Math.random() * 60);
}

function App() {
  const [number, setNumber] = useState(null);
  const handleClick = useCallback(() => {
    setNumber(randomNumber());
  }, [setNumber]);
  //useEffect mostra toda vez que for renderizado
  useEffect(() => {
    //passando o titulo do site
    document.title = number
      ? "O número sorteado foi " + number + "!"
      : "sorteie um numero";
  });
  return (
    <>
      {number && <p>O número sorteado foi {number}!</p>}
      <button onClick={handleClick}>Sortear</button>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
