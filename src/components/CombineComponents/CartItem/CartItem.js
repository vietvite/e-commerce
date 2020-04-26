import React, { Component } from "react";
import styles from "./CartItem.module.scss";
import { NavLink, Link } from "react-router-dom";
import QuantityForm from "../../BaseComponents/QuantityForm/QuantityForm";
import { Heart, Trash2, ShoppingBag } from "react-feather";
import { parseCurrency } from "../../../commons";
import { connect } from "react-redux";
import { addFavorite } from "../../../redux/favorite/action";
import ButtonGraySm from "../../BaseComponents/ButtonGraySm/ButtonGraySm";
import config from "../../../config";
import {
  removeCartRequest,
  changeQuantityCartRequest,
} from "../../../redux/cart/actionCreator";

class CartItem extends Component {
  render() {
    const { id, title, url, imageUrl, seller, price, quantity } = this.props;

    return (
      <div className={styles.cartItem}>
        <div className={styles.detail}>
          <img alt="thumbnail" src={`${config.baseURL}${imageUrl}`} />
          <div>
            <p>
              <NavLink className={styles.navLink} to={`/product/${id}`}>
                {title}
              </NavLink>
            </p>
            <p>
              Shop: <Link to={`/${seller.username}`}>{seller.fullname}</Link>
            </p>
          </div>
          <div className={styles.price}>
            <p>{parseCurrency(price)}đ</p>
          </div>
        </div>

        <div className={styles.control}>
          <QuantityForm
            fullWidth={true}
            quantity={quantity}
            updateQuantity={this.props.updateQuantity(id)}
          />

          <ButtonGraySm
            onClick={() =>
              this.props.addFavorite({
                id,
                title,
                url,
                imageUrl,
                seller,
                price,
              })
            }
          >
            <Heart
              size="0.9rem"
              strokeWidth="1.5px"
              style={{ marginRight: "0.125rem" }}
            />
            Yêu thích
          </ButtonGraySm>
          <ButtonGraySm
            to={`/orderlater/${id}`}
            fullWidth={true}
            onClick={() => this.props.moveCartToOrderLater(id)}
          >
            <ShoppingBag
              size="0.9rem"
              strokeWidth="1.5px"
              style={{ marginRight: "0.125rem" }}
            />
            Mua sau
          </ButtonGraySm>
          <ButtonGraySm
            onClick={() => this.props.removeCart(id)}
            fullWidth={true}
          >
            <Trash2
              size="0.9rem"
              strokeWidth="1.5px"
              style={{ marginRight: "0.125rem" }}
            />
            Xóa
          </ButtonGraySm>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateQuantity: (id) => (quantity) =>
    dispatch(changeQuantityCartRequest(id, quantity)),
  addFavorite: (item) => dispatch(addFavorite(item)),
  removeCart: (id) => dispatch(removeCartRequest(id)),
  moveCartToOrderLater: (id) => dispatch(cartToOrderLater(id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
