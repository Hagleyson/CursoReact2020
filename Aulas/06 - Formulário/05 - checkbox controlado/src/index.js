import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
function App() {
  const [isChecked, setChecked] = useState(false);
  const handleChange = useCallback(
    (e) => {
      setChecked(e.target.checked);
    },
    [setChecked]
  );
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(isChecked);
    },
    [isChecked]
  );
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="check">01</label>
      <input
        id="check"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <input type="submit" value="mostrar" />
    </form>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
