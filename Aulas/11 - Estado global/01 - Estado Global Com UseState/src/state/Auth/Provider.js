import React, { useState } from "react";
import AuthContext from "./Context";
function Provider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
export default Provider;
