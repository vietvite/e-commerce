import React from "react";
import style from "./Product.module.scss";
import { Star, ShoppingCart, Heart } from "react-feather";

class Product extends React.Component {
  render() {
    return (
      <div className={style.product}>
        <img
          src="/assets/productImage/p1.jpg"
          alt="Electric cooker"
          className={style.productImage}
        />
        <a href="/" className={style.productName}>
          Instant Pot Duo Mini 7-in-1 Electric Cooker
        </a>
        <div className={style.productMetaInfo}>
          <div className={style.review}>
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <div className={style.reviewCount}>(11,649)</div>
          </div>
          <div className={style.productInfo}>
            <div className={style.infoCol}>829,906đ</div>
            <div className={style.action}>
              <button>
                <ShoppingCart size="15px" />
              </button>
              <button>
                <Heart size="15px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
