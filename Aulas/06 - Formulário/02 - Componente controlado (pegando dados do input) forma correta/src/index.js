import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
function App() {
  const [name, setName] = useState("");
  const handleChange = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName]
  );
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(name);
      setName("");
    },
    [name]
  );
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />
        <input type="submit" value="Mostrar" />
      </form>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
