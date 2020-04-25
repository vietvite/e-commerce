import React, { Component } from "react";
import Container from "../../components/CombineComponents/Container/Container";
import CartList from "../../components/CombineComponents/CartList/CartList";
import CartTotal from "../../components/CombineComponents/CartTotal/CartTotal";
import { cartBody } from "./CartBody.module.scss";
import { connect } from "react-redux";
import { calcCostProductList, countProductList } from "../../commons";
import { fetchCartIfNeeded } from "../../redux/cart/actionCreator";

class Cart extends Component {
  componentDidMount() {
    this.props.fetchCartIfNeeded()
  }
  render() {
    const totalPrice = calcCostProductList(this.props.cart);
    const cartCount = countProductList(this.props.cart);
    const shippingFee = 21000;

    return (
      <Container>
        <div className={cartBody}>
          <h2>
            Có <span>{cartCount}</span> sản phẩm trong giỏ hàng
          </h2>
          <div>
            <CartList listProduct={this.props.cart} />
            <CartTotal {...{ totalPrice, shippingFee }} />
          </div>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCartIfNeeded: () => dispatch(fetchCartIfNeeded())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
