import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
function App() {
  const [size, setSize] = useState("grande");
  const handleChange = useCallback(
    (e) => {
      setSize(e.target.value);
    },
    [setSize]
  );
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(size);
    },
    [size]
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="radio"
        value="pequeno"
        checked={size === "pequeno"}
        onChange={handleChange}
      />
      <input
        type="radio"
        value="medio"
        checked={size === "medio"}
        onChange={handleChange}
      />
      <input
        type="radio"
        value="grande"
        checked={size === "grande"}
        onChange={handleChange}
      />
      <input type="submit" value="mostrar" onChange={handleChange} />
    </form>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
