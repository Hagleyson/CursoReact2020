import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import AuthProvider from "./state/Auth/Provider";
function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
