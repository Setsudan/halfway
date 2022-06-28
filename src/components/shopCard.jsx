// React component with image title and position from user location

export const ShopCard = ({ item,index }) => {
  return (
    <>
      <div className="shopCard" key={index}>
        <img src={item.shopImg} alt="" className="shopImg" />
        <h3 className="shopName">{item.shopName}</h3>
        <span className="distance">{item.shopDistance}</span>
      </div>
    </>
  );
  
};
