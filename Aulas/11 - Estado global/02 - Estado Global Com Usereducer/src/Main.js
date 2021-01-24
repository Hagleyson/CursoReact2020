import React, { useCallback, useContext } from "react";
import AuthContext from "./state/Auth/Context";
import * as actionControl from "./state/Auth/action";
function Main() {
  const { isLoggedIn, logDispact } = useContext(AuthContext);

  const handleEntrar = useCallback(() => {
    logDispact(actionControl.Entrar());
  }, [logDispact]);
  const handleSair = useCallback(() => {
    logDispact(actionControl.Sair());
  }, [logDispact]);
  const entrar = <button onClick={handleEntrar}>Entrar</button>;
  const sair = <button onClick={handleSair}>Sair</button>;
  return (
    <>
      <h1>O usuário está Logado? {isLoggedIn ? "Não" : "Sim"}</h1>
      {isLoggedIn ? sair : entrar}
    </>
  );
}
export default Main;
