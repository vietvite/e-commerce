import React, { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import ProductSection from "components/ProductSection/ProductSection";

function Home(props) {
  useEffect(() => {
    props.getProduct();
  }, [])

  return (
    <div>
      <Banner />
      <ProductSectionList />
    </div>
  );

  function ProductSectionList() {
    let listProduct = props.listProduct;
    let content = [];
    let temp = [];

    if (listProduct.length) {
      for (let i = 0, len = listProduct.length; i < len; i++) {
        if (i === 0) {
          temp.push(listProduct[i]);
        } else if (
          listProduct[i].category.id === listProduct[i - 1].category.id
        ) {
          temp.push(listProduct[i]);
        } else {
          content.push(<ProductSection key={i} list={temp} />);
          temp = [];
          temp.push(listProduct[i]);
        }
      }
      content.push(<ProductSection key={listProduct.length} list={temp} />);
    }
    return content;
  };
}

export default Home