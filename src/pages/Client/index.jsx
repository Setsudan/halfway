import { useState, useEffect } from "react";
import { supabase } from "../../api/_init";
import { getPosition } from "../../func/getPos";
import { ShopCard } from "../../components/ShopCard";
// Default Page
export const Index = () => {
  // on page load call supabase to get data from table shop
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(getPosition());
  useEffect(() => {
    supabase
      .from("store")
      .select("*")
      .then((res, error) => {
        if (!error) {
          const shopList = res.data;
          setData(shopList);
          setLoading(false);
        } else {
          console.warn(error);
        }
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {/* <Category/> */}
        {/* Use src/components/shopCard.jsx for each section */}
        {/* <Nearby/> */}
        <h1>Commerce à proximité</h1>
        {data.map((shop, index) => {
          // long et lat de place de nation paris
          const lat = 48.856614;
          const long = 2.3522219;
          if (long - long + 0.004 <= 0.05 && lat - lat - 0.0005 <= 0.05) {
            return (
              <ShopCard
                key={index}
                shopName={shop.name}
                adress={shop.adress}
                description={shop.description}
                schedule={shop.schedule}
                category={shop.category}
              />
            );
          }
        })}
        {/* <Popular/> */}
        <h1>Commerce du moment</h1>
        {/* {data.map((shop, index) => {
          if (shopCommandThisWeek > 10) {
            return (
              <ShopCard
                key={index}
                shopName={shop.name}
                adress={shop.adress}
                description={shop.description}
                schedule={shop.schedule}
                category={shop.category}
              />
            );
          }
        })} */}
        {/* <Recent/> */}
        <h1>Commerce à proximité</h1>
        {/* {data.map((shop, index) => {
          if (shop.name in recentShop) {
            return (
              <ShopCard
                key={index}
                shopName={shop.name}
                adress={shop.adress}
                description={shop.description}
                schedule={shop.schedule}
                category={shop.category}
              />
            );
          }
        })} */}
      </>
    );
  }
};
