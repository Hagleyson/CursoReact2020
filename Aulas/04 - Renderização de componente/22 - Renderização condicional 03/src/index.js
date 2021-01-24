import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  //se loading é true mostra carregando
  // senão mostra Bem vindo
  return <>{loading ? <p>Carregando...</p> : <h1>Bem Vindo!</h1>}</>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
