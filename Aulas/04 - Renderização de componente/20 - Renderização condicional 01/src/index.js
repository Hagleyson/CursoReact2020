import React from "react";
import ReactDOM from "react-dom";
let posts = [
  { id: "1", title: "As novidades do React 16" },
  { id: "2", title: "texto dois" },
  { id: "3", title: "texto 3" },
  { id: "4", title: "texto 4" }
];
//posts = [];
function App() {
  if (posts.length === 0) return <h1>Você não tem postagens</h1>;
  return <h1>voce têm {posts.length}!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
