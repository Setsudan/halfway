export const CheckoutShop = ({ item, index }) => {
  return (
    <>
      <div key={index} id={index} className="command-item">
        <img src={item.image} alt="" className="command-item-image" />
        <div className="command-item-info">
          <h2>{item.name}</h2>
          <p>Déposé il y a {item.waitingSince} minutes</p>
          <button className="buttonCheckout">{item.status}</button>
        </div>
      </div>
    </>
  );
};
