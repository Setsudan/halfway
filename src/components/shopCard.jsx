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
        <div>
          <h3>lundi</h3>
          <p>{schedule.lundi}</p>
          <h3>mardi</h3>
          <p>{schedule.mardi}</p>
          <h3>mercredi</h3>
          <p>{schedule.mercredi}</p>
          <h3>jeudi</h3>
          <p>{schedule.jeudi}</p>
          <h3>vendredi</h3>
          <p>{schedule.vendredi}</p>
          <h3>samedi</h3>
          <p>{schedule.samedi}</p>
          <h3>dimanche</h3>
          <p>{schedule.dimanche}</p>
        </div>
        <p className="category">{category}</p>
      </div>
    </>
  );
};
