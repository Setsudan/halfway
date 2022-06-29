// Page where a list of all commanded product will be shown with their status
import { CheckoutShop } from "../../components/checkoutShop";
export const CheckoutList = () => {
  // Exemple de ce a quoi la la liste devra ressembler
  const checkoutList = [
    { name: "Boulangerie Dina", waitingSince: 30, status: "En attente", image:"https://vrhpddolravjrcrtxbor.supabase.co/storage/v1/object/public/image/Boulangerie Dina.png" },
    { name: "Comptoir Orgaya Nation", waitingSince: 190, status: "Livreur en attente", image:"https://vrhpddolravjrcrtxbor.supabase.co/storage/v1/object/public/image/Comptoir Orgaya Nation.png" },
  ];

  return (
    <main id="Client-CommandList">
      <h2 className="titreCheckout">Votre liste de commande</h2>
      <div className="command-list">
        {checkoutList.map((item, index) => (
          <CheckoutShop item={item} index={index} />
        ))}
      </div>
      <button className="buttonCheckout"><h4 className="sousTitreCheckout">Tout commander</h4></button>
    </main>
  );
};
