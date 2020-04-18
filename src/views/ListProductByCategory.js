import React from "react";
import Container from "../components/CombineComponents/Container/Container";
import FilterBar from "../components/CombineComponents/FilterBar/FilterBar";

function ListProductByCategory() {
  return (
    <Container>
      <h1>List products</h1>
      <FilterBar/>
    </Container>
  );
}

export default ListProductByCategory;
