import React from "react";
import { style } from "./CartList.module.scss";
import CartItem from '../CartItem/CartItem'
import { removeCartRequest, changeQuantityCartRequest, addFavoriteRequest, addOrderLaterRequest } from '../../../redux/cart/actionCreator'
import { connect } from "react-redux";
import QuantityForm from "components/QuantityForm/QuantityForm";
import ButtonGraySm from "components/ButtonGraySm/ButtonGraySm";
import { Trash2, ShoppingBag, Heart } from "react-feather";

class CartList extends React.Component {
  render() {
    return (
      <div className={style}>
        {this.props.listProduct.map(
          (product, i) =>
            <CartItem key={i} {...product}>
              <QuantityForm
                fullWidth={true}
                quantity={product.quantity}
                updateQuantity={this.props.updateQuantity(product.id)} />

              <ButtonGraySm
                fullWidth={true}
                onClick={() => this.props.addFavorite(product.id, product)} >
                <Heart />
                Yêu thích
              </ButtonGraySm>
              <ButtonGraySm
                fullWidth={true}
                onClick={() => this.props.addOrderLater(product.id, product)}>
                <ShoppingBag />
                Mua sau
              </ButtonGraySm>
              <ButtonGraySm onClick={() => this.props.removeCart(product.id)} fullWidth={true} >
                <Trash2 />
                Xóa
              </ButtonGraySm>
            </CartItem>)
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateQuantity: id => quantity => dispatch(changeQuantityCartRequest(id, quantity)),
  addFavorite: (id, product) => dispatch(addFavoriteRequest(id, product)),
  removeCart: id => dispatch(removeCartRequest(id)),
  addOrderLater: (id, product) => dispatch(addOrderLaterRequest(id, product))
})
export default connect(null, mapDispatchToProps)(CartList)
