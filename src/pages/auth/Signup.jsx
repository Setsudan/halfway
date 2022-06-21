export function SignUp() {
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <form onSubmit={() => handleSignUp()}>
        <label htmlFor="lastName">Nom de famill</label>
        <input type="text" name="LastName" id="" />
        <label htmlFor="FirstName">Prénom</label>
        <input type="text" name="FirstName" id="" />
        <label htmlFor="Password">Mot de passe</label>
        <input type="password" name="Password" id="" />
        <label htmlFor="Mail">E-Mail</label>
        <input type="email" name="Mail" id="" />
        <label htmlFor="Adresse">Adresse</label>
        <input type="text" name="Adress" />
        <button>Rejoindre Halfway</button>
      </form>
    </>
  );
}
