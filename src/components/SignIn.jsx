import React, { useContext, useState } from "react";
import { AuthContext } from "./store/store";

const SignIn = () => {
  const [users] = useContext(AuthContext);
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [state, setState] = useState[false];
  const onLogin = () => {
    users.map((value) => {
      return value.name === name && value.password === pw
        ? setState(true)
        : alert("wrong password");
    });
    setName("");
    setPw("");
  };
  console.log(users);
  return (
    <div>
      {state ? (
        <h1>Welcome to our website</h1>
      ) : (
        <>
          (<h1>Sign in</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button onClick={onLogin}>Sign in</button>)
        </>
      )}
    </div>
  );
};

export default SignIn;
