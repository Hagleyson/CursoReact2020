import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const numberList = [1, 2, 3, 4, 5];
const letterList = ["A", "B", "C", "D", "E"];
function App() {
  const [numIdx, setNumIdx] = useState(0);
  const [litIdx, setLetIdx] = useState(0);
  const number = numberList[numIdx];
  const letter = letterList[litIdx];
  //parâmetro 1 função parametro dois depêndencias
  useEffect(() => {
    console.log("O número atual é " + number);
  }, [number, setNumIdx]);
  useEffect(() => {
    console.log("A letra atual é " + letter);
  }, [letter]);
  return (
    <>
      <h1> O número atual é {number}</h1>
      <button
        onClick={() => {
          setNumIdx(numIdx + 1);
        }}
      >
        Mudar número{" "}
      </button>
      <h1>A letra atual é {letter}</h1>
      <button
        onClick={() => {
          setLetIdx(litIdx + 1);
        }}
      >
        Mudar letra{" "}
      </button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
