// React component with image title and position from user location

export const ShopCard = ({
  shopName,
  adress,
  description,
  schedule,
  category,
}) => {
  return (
    <>
      <div className="shopCard">
        <img src={shopName + ".png"} alt="" className="shopImg" />
        <h3 className="shopName">{shopName}</h3>
        <span className="adress">{adress}</span>
        <p className="description">{description}</p>
        <p className="schedule">{schedule}</p>
        <p className="category">{category}</p>
      </div>
    </>
  );
};

