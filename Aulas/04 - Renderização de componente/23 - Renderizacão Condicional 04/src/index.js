import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
function App() {
  const [view, setView] = useState(false);
  const handleClick = useCallback(() => {
    setView((prev) => {
      return !prev;
    });
  }, [view, setView]);
  /* curto circuito {view && <NavBar/>
    nessa função ele verifica se o primeiro item 
    é verdadeiro ou falso se for false ele nem vai
    testar o segundo item, neste caso o <NavBar />,
    caso for o primeiro item for verdadeiro ele
    vai renderizar o NavBar
    */
  return (
    <>
      <button onClick={handleClick}>Menu</button>

      {view && <NavBar />}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
