import React from "react";
import { style } from "./CartList.module.scss";
import CartItem from '../CartItem/CartItem'
import { removeCartRequest, changeQuantityCartRequest, addFavoriteRequest, addOrderLaterRequest } from '../../../redux/cart/actionCreator'
import { connect } from "react-redux";
import QuantityForm from "../../BaseComponents/QuantityForm/QuantityForm";
import ButtonGraySm from "../../BaseComponents/ButtonGraySm/ButtonGraySm";
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
                <Heart size='0.9rem' strokeWidth='1.5px'
                  style={{ marginRight: '0.125rem' }} />
                Yêu thích
              </ButtonGraySm>
              <ButtonGraySm
                fullWidth={true}
                onClick={() => this.props.addOrderLater(product.id, product)}>
                <ShoppingBag size='0.9rem' strokeWidth='1.5px'
                  style={{ marginRight: '0.125rem' }} />
                Mua sau
              </ButtonGraySm>
              <ButtonGraySm onClick={() => this.props.removeCart(product.id)} fullWidth={true} >
                <Trash2 size='0.9rem' strokeWidth='1.5px'
                  style={{ marginRight: '0.125rem' }} />
                Xóa
              </ButtonGraySm>
            </CartItem>)
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateQuantity: id => quantity => dispatch(changeQuantityCartRequest(id, quantity)),
  addFavorite: (id, product) => dispatch(addFavoriteRequest(id, product)),
  removeCart: id => dispatch(removeCartRequest(id)),
  addOrderLater: (id, product) => dispatch(addOrderLaterRequest(id, product))
})
export default connect(null, mapDispatchToProps)(CartList)