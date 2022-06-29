// Page where user custom qr code can be seen
export const PersonnalCode = () => {
  const RandomUid =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return (
    <>
      <h1 className="TitreQR">Votre QR Code</h1>
      <img src="https://i.ibb.co/mtgTTPQ/frame.png" alt="frame" border="0" className="unique-code" />
      <h3 className="SousTitreQR">{RandomUid}</h3>
      {/* Faudra mettre le code pour afficher le QR code */}
    </>
  );
};
