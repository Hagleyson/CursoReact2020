import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
function App() {
  const [code, setCode] = useState("python");
  const handleChange = useCallback(
    (e) => {
      setCode(e.target.value);
    },
    [setCode]
  );
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(code);
    },
    [code]
  );
  return (
    <form onSubmit={handleSubmit}>
      <select value={code} onChange={handleChange}>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="python">Python</option>
        <option value="c#">c#</option>
      </select>
      <input type="submit" value="mostrar" />
    </form>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
