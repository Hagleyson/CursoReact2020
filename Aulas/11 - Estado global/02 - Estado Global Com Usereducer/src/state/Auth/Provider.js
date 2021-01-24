import React, { useReducer } from "react";
import AuthContext from "./Context";
import reducer from "./reducer";
function Provider({ children }) {
  const [isLoggedIn, logDispact] = useReducer(reducer);
  return (
    <AuthContext.Provider value={{ isLoggedIn, logDispact }}>
      {children}
    </AuthContext.Provider>
  );
}
export default Provider;
