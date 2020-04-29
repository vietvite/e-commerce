import React from "react";
import { countProductList } from "../../../commons";
import Container from "../Container/Container";
import { connect } from "react-redux";
import CartList from "../CartList/CartList";

class CartOrderLater extends React.Component {
  render() {
    const cartCount = countProductList(this.props.orderLater);
    return (
      <Container>
        <div className>
          <h2>
            Có <span>{cartCount}</span> sản phẩm trong giỏ hàng mua sau
          </h2>
          <div>
            <CartList listProduct={this.props.orderLater} />
          </div>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  orderLater: state.cart.orderLater,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartOrderLater);
