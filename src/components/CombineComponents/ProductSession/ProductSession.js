import React from "react";
import style from "./ProductSession.module.scss";
import Product from "../../BaseComponents/Product/Product";
import { ChevronRight } from "react-feather";

var listProduct = [];
for (let i = 0; i < 6; i++) {
  listProduct.push(<Product />);
}
class ProductSession extends React.Component {
  render() {
    return (
      <div className={style.sessionProduct}>
        <div className={style.type}>
          <div className={style.left}>
            Electric Product
            <ChevronRight />
          </div>
          <div className={style.right}>
            <button>New Release</button>
            {/* <button>Cooktops</button> */}
            <button>Dish Washer</button>
          </div>
        </div>
        <div className={style.listProduct}>{listProduct}</div>
      </div>
    );
  }
}
export default ProductSession;
