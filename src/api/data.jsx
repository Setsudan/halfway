import {  useState } from "react";
import { supabase } from "./_init"
import { ShopCard } from "../components/shopCard";
export const Data =  async () => {
  
  const [store,setStore] = useState([])
  let { data: shopData, error } = await supabase
  .from('store')
  .select('*')
 setStore(shopData)
  /*  return (
          <>
          <h1>Liste de magasin</h1>
          <div className="listMerchant">
            {Data.map((item, index) => (
              <ShopCard item={item} index={index} />
            ))}
          </div>
          </>
        ) */
   /*  supabase
    .from("store")
    .select("*")
    .then(({ data, error }) => {
      if (!error) {
        setStore(data);
      }
    }) */
        return (
        <button onClick={()=> console.log(store)}>Get data</button>
        )
}