export const Index = () => {
  let status = "";
  if ("serviceWorker" in navigator) {
    status = "ServiceWorker présent";
  } else {
    status = "serviceWorker absent";
  }
  return (
    <>
      <h1>Index</h1>
      <span>{status}</span>
    </>
  );
};
