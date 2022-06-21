export const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <h1>Bon retour parmis nous !</h1>
      <form onSubmit={() => handleLogin()}>
        <input type="text" name="uid" />
        <input type="password" name="password" />
        <button type="submit">Se connecter</button>
      </form>
    </>
  );
};
