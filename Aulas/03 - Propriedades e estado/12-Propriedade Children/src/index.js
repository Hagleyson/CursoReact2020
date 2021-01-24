import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Icon from "./Icon";
function App() {
  return (
    <div>
      <Button>
        <Icon />
        <p>Botão</p>
      </Button>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
