import { useState } from "react";
export default function PeteLesCouille() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");

  const handleFN = (e) => {
    setFirstName(e.target.value);
  };
  const handleLN = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAdress = (e) => {
    setAdress(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    console.log(firstName, lastName, email, adress, password);
  };
  return (
    <>
      <label htmlFor="lastName">Nom de famille</label>
      <input
        type="text"
        name="LastName"
        id=""
        value={lastName}
        onChange={handleLN}
      />
      <label htmlFor="FirstName">Prénom</label>
      <input
        type="text"
        name="FirstName"
        id=""
        value={firstName}
        onChange={handleFN}
      />
      <label htmlFor="Mail">E-Mail</label>
      <input
        type="email"
        name="Mail"
        id=""
        value={email}
        onChange={handleEmail}
      />
      <label htmlFor="Password">Mot de passe</label>
      <input
        type="password"
        name="Password"
        id=""
        value={password}
        onChange={handlePass}
      />
      <label htmlFor="Adresse">Adresse</label>
      <input type="text" name="Adress" value={adress} onChange={handleAdress} />
      <button onClick={() => handleSignUp()}>Rejoindre Halfway</button>
    </>
  );
}
