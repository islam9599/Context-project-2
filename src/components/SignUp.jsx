import React, { useContext, useState } from "react";
import { AuthContext } from "./store/store";

export const SignUp = () => {
  const [users, setUsers] = useContext(AuthContext);
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const onSubmit = () => {
    const newData = [...users, { id: users.length, name, password: pw }];
    setUsers(newData);
    setName("");
    setPw("");
  };
  console.log(users);
  return (
    <div>
      <h1>Sign Up</h1>
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
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
