import React, { useCallback, useContext } from "react";
import AuthContext from "./state/Auth/Context";
function Main() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleClick = useCallback(() => {
    setIsLoggedIn((prev) => {
      return !prev;
    });
  }, [setIsLoggedIn]);

  return (
    <>
      <h1>O usuário está Logado? {isLoggedIn ? "Não" : "Sim"}</h1>
      <button onClick={handleClick}>{isLoggedIn ? "Entrar" : "Sair"}</button>
    </>
  );
}
export default Main;
