import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const Auth = (props) => {
  const [users, setUsers] = useState([
    { id: 1, name: "admin", password: "admin" },
    { id: 1, name: "admin", password: "admin" },
    { id: 1, name: "admin", password: "admin" },
  ]);
  return (
    <AuthContext.Provider value={[users, setUsers]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Auth;
