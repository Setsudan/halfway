// React component with image title and position from user location

export const ShopCard = ({ shopImg, shopName, shopDistance }) => {
  return (
    <>
      <div className="shopCard">
        <img src={shopImg} alt="" className="shopImg" />
        <h3 className="shopName">{shopName}</h3>
        <span className="distance">{shopDistance}</span>
      </div>
    </>
  );
};
