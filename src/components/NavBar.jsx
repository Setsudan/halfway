const Nav = ({ type }) => {
  if (type == "brand") {
    return <BrandNav />;
  } else if (type == "delivery") {
    return <DeliveryNav />;
  } else {
    return <ClientNav />;
  }
};

const ClientNav = () => {
  return (
    <>
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
    </>
  );
};
const DeliveryNav = () => {
  return (
    <>
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
    </>
  );
};
const BrandNav = () => {
  return (
    <>
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
    </>
  );
};
