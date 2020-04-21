import React from "react";
import { style } from "./CartList.module.scss";
import CartItem from '../CartItem/CartItem'

class CartList extends React.Component {
  render() {
    return (
      <div className={style}>
        {this.props.listProduct.map(
          (product, i) => <CartItem key={i} {...product} />)
        }
      </div>
    )
  }
}
export default CartList