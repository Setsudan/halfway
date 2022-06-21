import { useState } from "react";

export const Login = () => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");

  const handleUid = (e) => {
    setUid(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    console.log("... Supabase init");
  };
  return (
    <>
      <h1>Bon retour parmis nous !</h1>
      <input type="text" name="uid" value={uid} onChange={handleUid} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePass}
      />
      <button onClick={() => handleLogin()}>Se connecter</button>
    </>
  );
};
