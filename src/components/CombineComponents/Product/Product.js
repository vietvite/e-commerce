import React from "react";
import style from "./Product.module.scss";
import { Star, ShoppingCart, Heart } from "react-feather";

class Product extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     totalStars: 0,
  //     totalReviews: 0,
  //   };
  // }

  // componentDidMount() {
  //   let reviewStar = this.props.item.reviewStar || 0;
  //   if (reviewStar !== 0) {
  //     let totalStars =
  //       reviewStar._1star * 1 +
  //       reviewStar._2star * 2 +
  //       reviewStar._3star * 3 +
  //       reviewStar._4star * 4 +
  //       reviewStar._5star * 5;
  //     let totalReviews =
  //       reviewStar._1star +
  //       reviewStar._2star +
  //       reviewStar._3star +
  //       reviewStar._4star +
  //       reviewStar._5star;

  //     this.setState({ totalStars: totalStars, totalReviews: totalReviews });
  //   }
  // }

  // loadReviewStar = () => {
  //   let n = Math.round(this.state.totalStars / this.state.totalReviews);
  //   let stars = [];
  //   for (let i = 0; i < n; i++) {
  //     stars.push(<Star key={i} className={style.reviewStar} />);
  //   }
  //   return stars;
  // };

  formatNumber = (number) => number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  render() {
    return (
      <div className={style.product}>
        <a
          href={`/product/${this.props.item.id}`}
          className={style.productName}
        >
          <img
            src={this.props.item.imageUrl}
            className={style.productImage}
            alt={this.props.item.title}
          />
          {this.props.item.title}
        </a>
        <div className={style.productMetaInfo}>
          <div className={style.review}>
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            {/* {this.loadReviewStar()}
            <div className={style.reviewCount}>
              {`(${this.state.totalReviews})`}
            </div> */}
          </div>
          <div className={style.productInfo}>
            <div className={style.infoCol}>
              {`${this.formatNumber(this.props.item.price.toString())}đ`}
            </div>
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
