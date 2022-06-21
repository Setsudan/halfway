import { useState } from "react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
export const AuthIndex = () => {
  const [isClient, setIsClient] = useState(true);
  const handleClient = () => {
    if (isClient) {
      setIsClient(false);
    } else {
      setIsClient(true);
    }
  };
  return (
    <>
      {isClient ? <Login /> : <SignUp />}
      <span
        onClick={() => {
          handleClient();
        }}
      >
        {isClient ? "Créer un compte" : "Se connecter"}
      </span>
    </>
  );
};
