import React from "react";
import style from "./Product.module.scss";
import { Star, ShoppingCart, Heart } from "react-feather";
import { connect } from "react-redux";
import config from "../../../config";
import { NavLink } from "react-router-dom";
import {
  addCartRequest,
  addFavoriteRequest,
} from "../../../redux/cart/actionCreator";
import { parseCurrency } from "../../../commons/utils";
import { showFormLogin, toggleForm } from "../../../redux/form/action";

class Product extends React.Component {
  getTotalStars = () => {
    let reviewStar = this.props.item.reviewStar;
    let totalStars =
      reviewStar._1star * 1 +
      reviewStar._2star * 2 +
      reviewStar._3star * 3 +
      reviewStar._4star * 4 +
      reviewStar._5star * 5;
    return totalStars;
  };

  getTotalReviews = () => {
    let reviewStar = this.props.item.reviewStar;
    let totalReviews =
      reviewStar._1star +
      reviewStar._2star +
      reviewStar._3star +
      reviewStar._4star +
      reviewStar._5star;
    return totalReviews;
  };

  loadReviewStar = () => {
    let totalStars = this.getTotalStars();
    let totalReviews = this.getTotalReviews();
    let starCount = Math.round(totalStars / totalReviews) || 0;
    let stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(
        <Star key={i} className={`${style.reviewStar}  ${style.fill}`} />
      );
    }
    for (let i = 0; i < 5 - starCount; i++) {
      stars.push(<Star key={i + starCount} className={style.reviewStar} />);
    }
    return stars;
  };

  render() {
    let { id, title, url, imageUrl, seller, price, stock } = this.props.item;
    const isInStock = stock > 0;
    return (
      <div className={style.product}>
        <NavLink
          to={`/detail/${this.props.item.id}`}
          className={style.productName}
          title={this.props.item.title}
        >
          <img
            src={`${config.baseURL}${this.props.item.imageUrl}`}
            className={style.productImage}
            alt={this.props.item.title}
          />
          {this.props.item.title.length < 35
            ? this.props.item.title
            : this.props.item.title.slice(0, 34) + "..."}
        </NavLink>
        <div className={style.productMetaInfo}>
          <div className={style.review}>
            {this.loadReviewStar()}
            <div className={style.reviewCount}>
              {`(${this.getTotalReviews()})`}
            </div>
          </div>
          <div className={style.productInfo}>
            <div className={style.infoCol}>
              {`${parseCurrency(this.props.item.price)}đ`}
            </div>
            <div className={style.action}>
              {isInStock && (
                <button
                  onClick={() =>
                    this.props.addCartRequest(
                      id,
                      this.props.item,
                      this.props.user
                    )
                  }
                >
                  <ShoppingCart size="15px" />
                </button>
              )}
              <button
                onClick={() =>
                  this.props.addFavorite(
                    id,
                    {
                      id,
                      title,
                      url,
                      imageUrl,
                      seller,
                      price,
                    },
                    this.props.user
                  )
                }
              >
                <Heart size="15px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addCartRequest: (productId, product, user) => {

    if (user === null) {

      dispatch(showFormLogin());
      dispatch(toggleForm());
    } else if (user.role === "ROLE_CUSTOMER") {
      console.log('asdfasdfasdf');

      dispatch(addCartRequest(productId, product));
    }
  },
  addFavorite: (id, product, user) => {
    if (user === null) {
      dispatch(showFormLogin());
      dispatch(toggleForm());
    } else if (user.role === "ROLE_CUSTOMER") {
      dispatch(addFavoriteRequest(id, product));
    }
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
