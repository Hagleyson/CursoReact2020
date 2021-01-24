import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
function App() {
  const [msg, setMsg] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(msg);
      setMsg("");
    },
    [msg]
  );
  const handleChange = useCallback(
    (e) => {
      setMsg(e.target.value);
    },
    [setMsg]
  );
  return (
    <form onSubmit={handleSubmit}>
      <textarea value={msg} onChange={handleChange} />
      <br />
      <input type="submit" value="mostrar" />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
