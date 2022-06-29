// Page where a list of all commanded product will be shown with their status
import { CheckoutShop } from "../../components/checkoutShop";
export const CheckoutList = () => {
  // Exemple de ce a quoi la la liste devra ressembler
  const checkoutList = [
    { name: "Boucherie Saguet", waitingSince: 30, status: "En attente" },
    { name: "Nicolas Saguet", waitingSince: 190, status: "Livreur en attente" },
  ];

  return (
    <main id="Client-CommandList">
      <h2>Votre liste de commande</h2>
      <div className="command-list">
        {checkoutList.map((item, index) => (
          <CheckoutShop item={item} index={index} />
        ))}
      </div>
    </main>
  );
};
