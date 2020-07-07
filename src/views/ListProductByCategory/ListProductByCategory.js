import React from "react";
import Container from "../../components/Container/Container";
import FilterBar from "../../components/FilterBar/FilterBar";
import SortBar from "../../components/SortBar/SortBar";
import style from "./ListProductByCategory.module.scss";
import ProductPageContent from "../../components/ProductPageContent/ProductPageContent";

function ListProductByCategory() {
  return (
    <Container>
      <div className={style.listProductByCategory}>
        <FilterBar />
        <div className={style.content}>
          <SortBar />
          <ProductPageContent />
        </div>
      </div>
    </Container>
  );
}

export default ListProductByCategory;
