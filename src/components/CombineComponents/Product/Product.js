import React from "react";
import style from "./Product.module.scss";
import { Star, ShoppingCart, Heart } from "react-feather";
import { addFavorite } from '../../../redux/favorite/action'
import { connect } from 'react-redux'
import config from '../../../config'
import { NavLink } from "react-router-dom";
import { addCartRequest } from "../../../redux/cart/actionCreator";

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
    let starCount = Math.round(totalStars / totalReviews);
    let stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<Star key={i} className={style.reviewStar} />);
    }
    return stars;
  };

  formatNumber = (number) => number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  render() {
    let { id, title, url, imageUrl, seller, price } = this.props.item

    return (
      <div className={style.product}>
        <NavLink
          to={`/detail/${this.props.item.id}`}
          className={style.productName}>
          <img
            src={`${config.baseURL}${this.props.item.imageUrl}`}
            className={style.productImage}
            alt={this.props.item.title}
          />
          {this.props.item.title}
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
              {`${this.formatNumber(this.props.item.price.toString())}đ`}
            </div>
            <div className={style.action}>
              <button onClick={() => this.props.addCartRequest(id)}>
                <ShoppingCart size="15px" />
              </button>
              <button onClick={() => this.props.addFav({ id, title, url, imageUrl, seller, price })}>
                <Heart size="15px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addFav: (item) => {
      dispatch(addFavorite(item))
    },
    addCartRequest: (productId) => dispatch(addCartRequest(productId, ownProps))
  }
}
export default connect(null, mapDispatchToProps)(Product);
