import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

function App() {
  const [weather, setWeather] = useState("ensolarado");

  const handleCLick = useCallback(() => {
    window.alert("o clima está " + weather + "!");
  }, [weather]);
  return (
    <>
      <h1>o clima está {weather}!</h1>
      <button
        onClick={() => {
          setWeather("ensolarado");
        }}
      >
        Ensolarado
      </button>
      <button
        onClick={() => {
          setWeather("nublado");
        }}
      >
        Nublado
      </button>
      <button
        onClick={() => {
          setWeather("chuvoso");
        }}
      >
        Chuvoso
      </button>
      <button onClick={handleCLick}>mostrar clima</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
