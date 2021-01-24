import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
//para chamar o welcome
import Welcom from "./Welcome";

function App() {
  return (
    <div>
      <Welcome gender="male" name="Hagleyson" />
      <Welcome gender="female" name="Maria" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
