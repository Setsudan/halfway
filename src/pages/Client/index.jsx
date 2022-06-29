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
  // Await that we have the data to show the page
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase
      .from("store")
      .select("*")
      .then((res, error) => {
        if (!error) {
          const shopList = res.data;
          setData(shopList);
          // wait 3 seconds to show the page
          setTimeout(() => {
            setLoading(false);
          }, 3000);
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
          // Fake search bar, because we didn't have the
          // will to make a search bar using supabase
          // Could have been done with useEffect and useState
          // On change of input, call the function to search
          // then call the database and add a "where" clause
          // Then retrieve the data and set it to the result useState
          // then show all the result in a .map function
        }
        <div className="search-bar">
          <div className="searchbar-content">
            <input type="text" placeholder="Cherchez votre magasin !" />
            <button>Chercher</button>
          </div>
        </div>
        {/* <Category/> 
        Show different categories of shops */}
        {/* Show nearby shops */}
        <Nearby data={data} />
        {/* Show popular shops */}
        <Popular data={data} />
        {/* Show Recently visited shops */}
        <Recent data={data} />
      </main>
    );
  }
};
