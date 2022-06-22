// Page where you can modify user information
export const Profile = () => {
  const FirstName = "John";
  const LastName = "Doe";
  const Mail = "johndoe@gmail.com";
  const Adress = "420 rue du poucet";
  // A adapter pour que ce soit le bon format
  // adapter pour qu'on recupere les données de l'utilisateur
  return (
    <>
      <main id="main-info">
        <img src="" alt="" className="pfp" />
        <div className="info">
          <label htmlFor="FirstName">FirstName</label>
          <input type="text" name="FirstName" id="" value={FirstName} />
          <label htmlFor="LastName">LastName</label>
          <input type="text" name="LastName" id="" value={LastName} />
          <label htmlFor="Mail">Mail</label>
          <input type="text" name="Email" id="" value={Mail} />
          <label htmlFor="Adress">Adress</label>
          <input type="text" name="Adress" id="" value={Adress} />
          <label htmlFor="Password">Password</label>
          <input type="text" name="Password" id="" />
          <button className={hasBeenModified ? "active" : "disabled"}>
            Sauvegarder
          </button>
        </div>
      </main>
    </>
  );
};
