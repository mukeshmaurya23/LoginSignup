import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  token: "",
  user: {},
});
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({
    token: "",
    user: {},
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      setToken({ token, user });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
