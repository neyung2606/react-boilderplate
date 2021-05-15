const validateJWT = () => {
  const regex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
  return regex.test(localStorage.getItem("access-token") || "");
};

export const initialAuthState = {
  isAuthenticated: validateJWT(),
};

export const authReducer = (prevState, action) => {
  switch (action.type) {
    case "SWITCH_AUTH_STATE":
      return { ...prevState, isAuthenticated: action.payload.state };

    default:
      return prevState;
  }
};
