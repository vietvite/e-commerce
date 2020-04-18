import React from "react";
import style from "./ProductSection.module.scss";
import Product from "../Product/Product";
import { ChevronRight } from "react-feather";
import UnderlineButton from "../../BaseComponents/UnderlineButton/UnderlineButton";
import Container from '../Container/Container'

var listProduct = [];
for (let i = 0; i < 6; i++) {
  listProduct.push(<Product key={i}/>);
}
class ProductSection extends React.Component {
  render() {
    return (
      <Container>
        <div className={style.sessionProduct}>
          <div className={style.type}>
            <div className={style.left}>
              Electric Product
            <ChevronRight />
            </div>
            <div className={style.right}>
              <UnderlineButton>New Release</UnderlineButton>
              <UnderlineButton>Cooktops</UnderlineButton>
              <UnderlineButton>Dish Washer</UnderlineButton>
              <button className={style.lastButton}>See All</button>
            </div>
          </div>
          <div className={style.listProduct}>{listProduct}</div>
        </div>
      </Container>
    );
  }
}
export default ProductSection;
