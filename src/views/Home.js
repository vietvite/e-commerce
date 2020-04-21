import React from "react";
import ProductSession from "../components/CombineComponents/ProductSection/ProductSection";
import Banner from "../components/CombineComponents/Banner/Banner";
import HomeProduct from "../components/CombineComponents/HomeProduct/HomeProduct";
function Home() {
  return (
    <div>
      <Banner />
      {/* <ProductSession /> */}
      <HomeProduct />
    </div>
  );
}

export default Home;
