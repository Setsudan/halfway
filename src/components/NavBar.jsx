import { Link } from "react-router-dom";

const ClientNav = () => {
  return (
    <div className="bar">
      <Link to="">
        <img src="https://www.svgrepo.com/show/9399/home.svg" alt="#" />
      </Link>
      <Link to="">
        <img src="https://www.svgrepo.com/show/299682/qr-code.svg" alt="#" />
      </Link>
      <Link to="">
        <img src="https://www.svgrepo.com/show/42768/cart.svg" alt="#" />
      </Link>
      <Link to="">
        <img src="https://www.svgrepo.com/show/361411/account.svg" alt="#" />
      </Link>
    </div>
  );
};
const DeliveryNav = () => {
  return (
    <div className="bar">
      <Link to="">
        <img src="#" alt="#" />
      </Link>
      <Link to="">
        <img src="#" alt="#" />
      </Link>
      <Link to="">
        <img src="#" alt="#" />
      </Link>
      <Link to="">
        <img src="#" alt="#" />
      </Link>
    </div>
  );
};
const BrandNav = () => {
  return (
    <div className="bar">
      <Link to="">
        <img src="#" alt="#" />
      </Link>
      <Link to="">
        <img src="#" alt="#" />
      </Link>
      <Link to="">
        <img src="#" alt="#" />
      </Link>
      <Link to="">
        <img src="#" alt="#" />
      </Link>
    </div>
  );
};

export const Nav = ({ type }) => {
  if (type == "brand") {
    return <BrandNav />;
  } else if (type == "delivery") {
    return <DeliveryNav />;
  } else {
    return <ClientNav />;
  }
};
