import React, { useReducer } from "react";
import { AuthContext, authReducer, initialAuthState } from "src/utils/context";

const AuthContextProvider = ({ children }) => {
  const [authState, dispatchAuthAction] = useReducer(
    authReducer,
    initialAuthState
  );

  return (
    <AuthContext.Provider value={{ authState, dispatchAuthAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
