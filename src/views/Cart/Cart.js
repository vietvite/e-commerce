import React, { Component } from "react";
import Container from "../../components/CombineComponents/Container/Container";
import CartList from "../../components/CombineComponents/CartList/CartList";
import CartTotal from "../../components/CombineComponents/CartTotal/CartTotal";
import { cartBody } from "./CartBody.module.scss";
import { connect } from "react-redux";
import { calcCostProductList, countProductList } from "../../commons";
import { BASE_URL } from '../../config'

class Cart extends Component {
  showCart() {
    if (this.props.cart.length) {
      const cartCount = countProductList(this.props.cart);

      const { shippingFee, totalPrice, freeShippingThreshold } = this.props
      const shipping = totalPrice > freeShippingThreshold ? 0 : shippingFee

      return (
        <div className={cartBody}>
          <h2>
            Có <span>{cartCount}</span> sản phẩm trong giỏ hàng
          </h2>
          <div>
            <CartList listProduct={this.props.cart} />
            <CartTotal {...{ totalPrice, shipping }} />
          </div>
        </div>
      )
    } else {
      return <img style={{ display: 'block', margin: '0 auto' }} src={`${BASE_URL}/img/empty-cart.png`} alt='emptycart' />
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
  shippingFee: state.payment.shippingFee,
  freeShippingThreshold: state.payment.freeShippingThreshold,
  totalPrice: ((state) => {
    const total = calcCostProductList(state.cart.list)
    return total > state.payment.freeShippingThreshold
      ? total :
      total + state.payment.shippingFee
  })(state),
});

export default connect(mapStateToProps)(Cart);
