import React from "react";
import Container from "../../components/CombineComponents/Container/Container";
import FilterBar from "../../components/CombineComponents/FilterBar/FilterBar";
import SortBar from "../../components/CombineComponents/SortBar/SortBar";
import style from "./ListProductByCategory.module.scss";

function ListProductByCategory() {
  return (
    <Container>
      <div className={style.listProductByCategory}>
        <FilterBar />
        <div className={style.content}>
          <SortBar />
        </div>
      </div>
    </Container>
  );
}

export default ListProductByCategory;
