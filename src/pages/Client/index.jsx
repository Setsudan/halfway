import { useState, useEffect } from "react";
import { supabase } from "../../api/_init";
//import { getPosition } from "../../func/getPos";
import { ShopCard } from "../../components/ShopCard";

// Default Page
export const Index = () => {
  // on page load call supabase to get data from table shop
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
      <main id="ClientHome">
        {
          // Fake search bar
        }
        <div className="search-bar">
          <div className="searchbar-content">
            <input type="text" placeholder="Cherchez votre magasin !" />
            <button>Chercher</button>
          </div>
        </div>
        {/* <Category/> */}
        {/* Use src/components/shopCard.jsx for each section */}
        {/* <Nearby/> */}
        <h2>Commerce à proximité</h2>
        <div className="nearby-list">
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
                  /* schedule={shop.schedule} */
                  category={shop.category}
                />
              );
            }
          })}
        </div>
        {/* <Popular/> */}
        <h2>Commerce du moment</h2>
        <div className="popular-list">
          {
            // Return 10 random shops from data
            data
              .sort(() => Math.random() - 0.5)
              .slice(0, 10)
              .map((shop, index) => {
                return (
                  <ShopCard
                    key={index}
                    shopName={shop.name}
                    adress={shop.adress}
                    description={shop.description}
                    /* schedule={shop.schedule} */
                    category={shop.category}
                  />
                );
              })
          }
        </div>
        {/* <Recent/> */}
        <h2>Vos récents magasins</h2>
        <div className="recent-list">
          {
            // Return 10 random shops from data
            data
              .sort(() => Math.random() - 0.5)
              .slice(0, 10)
              .map((shop, index) => {
                return (
                  <ShopCard
                    key={index}
                    shopName={shop.name}
                    adress={shop.adress}
                    description={shop.description}
                    /* schedule={shop.schedule} */
                    category={shop.category}
                  />
                );
              })
          }
        </div>
      </main>
    );
  }
};
