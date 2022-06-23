// Default Page
export const Index = () => {
  return (
    <>
      {/* <Category/> */}
      {/* Use src/components/shopCard.jsx for each section */}
      {/* <Nearby/> */}
      {/* exemple
        <h1>Commerce à proximité</h1>
      {
        shopList.map((shop,index)=>{
          if(shopLon - userLong <= 0.05 && shopLat - userLat <= 0.05){
            return <ShopCard key={index} shopImg={shop.img} shopName={shop.name} shopDistance={shop.pos} />
          }
        })
      }
        */}
      {/* <Popular/> */}
      {/* exemple
        <h1>Commerce du moment</h1>
      {
        shopList.map((shop,index)=>{
          if(shopVCommandThisWeek > 10){
            return <ShopCard key={index} shopImg={shop.img} shopName={shop.name} shopDistance={shop.pos} />
          }
        })
      }
        */}
      {/* <Recent/> */}
      {/* exemple
        <h1>Commerce à proximité</h1>
      {
        shopList.map((shop,index)=>{
          if(shop.name in recentShop){
            return <ShopCard key={index} shopImg={shop.img} shopName={shop.name} shopDistance={shop.pos} />
          }
        })
      }
        */}
    </>
  );
};
