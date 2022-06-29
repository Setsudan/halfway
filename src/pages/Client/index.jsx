import { useState, useEffect } from "react";
import { supabase } from "../../api/_init";
import { Nearby } from "../../components/pages/Client/Nearby";
import { Popular } from "../../components/pages/Client/Popular";
import { Recent } from "../../components/pages/Client/Recent";
//import { getPosition } from "../../func/getPos";

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
        {/* <Category/> 
        Show different categories of shops */}
        <Nearby data={data} />
        <Popular data={data} />
        <Recent data={data} />
      </main>
    );
  }
};
