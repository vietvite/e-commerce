import React, { Component } from "react";
import Container from "../../components/CombineComponents/Container/Container";
import CartList from "../../components/CombineComponents/CartList/CartList";
import CartTotal from "../../components/CombineComponents/CartTotal/CartTotal";
import { cartBody } from "./CartBody.module.scss";
import { connect } from "react-redux";
import { calcCostProductList, countProductList } from "../../commons";
import config from '../../config'

class Cart extends Component {
  showCart() {
    if (this.props.cart.length) {
      const totalPrice = calcCostProductList(this.props.cart);
      const cartCount = countProductList(this.props.cart);
      const shippingFee = 21000;

      return (
        <div className={cartBody}>
          <h2>
            Có <span>{cartCount}</span> sản phẩm trong giỏ hàng
          </h2>
          <div>
            <CartList listProduct={this.props.cart} />
            <CartTotal {...{ totalPrice, shippingFee }} />
          </div>
        </div>
      )
    } else {
      return <img style={{ display: 'block', margin: '0 auto' }} src={`${config.baseURL}/img/empty-cart.png`} alt='emptycart' />
    }
  }
  render() {
    return (
      <Container>
        {this.showCart()}
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.list,
});

export default connect(mapStateToProps)(Cart);
