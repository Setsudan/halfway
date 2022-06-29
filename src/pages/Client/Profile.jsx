// Page where you can modify user information
import { useState } from "react";
export const Profile = () => {
  // useState to check if user has modified values of inputs
  const [modified, setModified] = useState(false);
  // useState to store input values
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    adress: "",
    password: "",
  });
  return (
    <>
      <main id="main-info">
        <img src="" alt="" className="pfp" />
        <div className="info">
          <label htmlFor="FirstName">FirstName</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            value={values.firstName}
            onChange={(e) => {
              setValues({ ...values, firstName: e.target.value });
              setModified(true);
            }}
          />
          <label htmlFor="LastName">LastName</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={values.lastName}
            onChange={(e) => {
              setValues({ ...values, lastName: e.target.value });
              setModified(true);
            }}
          />
          <label htmlFor="Mail">Mail</label>
          <input
            type="text"
            id="Mail"
            name="Mail"
            value={values.email}
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
              setModified(true);
            }}
          />
          <label htmlFor="Adress">Adress</label>
          <input
            type="text"
            id="Adress"
            name="Adress"
            value={values.adress}
            onChange={(e) => {
              setValues({ ...values, adress: e.target.value });
              setModified(true);
            }}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={values.password}
            onChange={(e) => {
              setValues({ ...values, password: e.target.value });
              setModified(true);
            }}
          />
          {
            // If user has modified values, show a button to save them
            modified && (
              <button
                type="button"
                onClick={() => {
                  setModified(false);
                }}
              >
                Sauvegarder
              </button>
            )
          }
        </div>
      </main>
    </>
  );
};
