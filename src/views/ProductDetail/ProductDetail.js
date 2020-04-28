import React from "react";
import style from "./ProductDetail.module.scss";
import { connect } from "react-redux";
import { getProductDetail } from "../../redux/product/actionCreator";
import Container from "../../components/CombineComponents/Container/Container";
import { Star } from "react-feather";
import { parseCurrency } from "../../commons";
import config from "../../config";
import { addCartRequest } from "../../redux/cart/actionCreator";
import { push } from "connected-react-router";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  componentDidMount() {
    let productId = this.props.match.params.productId;
    this.props.getProductDetail(productId);
  }

  handleClick = (operator) => {
    let quantity = this.state.quantity;
    if (operator === "-") {
      quantity--;
      quantity = quantity < 0 ? 0 : quantity;
    } else {
      if (quantity < this.props.product.stock) {
        quantity++;
      }
    }
    this.setState({ quantity: quantity });
  };

  handleChange = (event) => {
    let quantity = event.target.value;
    quantity = parseInt(quantity) || 0;
    if (quantity <= this.props.product.stock) {
      this.setState({ quantity: quantity });
    }
  };
  starsCount = () => {
    let product = this.props.product;
    let reviewStar = product.reviewStar;
    let starsCount = !!reviewStar
      ? reviewStar._1star * 1 +
        reviewStar._2star * 2 +
        reviewStar._3star * 3 +
        reviewStar._4star * 4 +
        reviewStar._5star * 5
      : 0;
    return starsCount;
  };

  reviewsCount = () => {
    let product = this.props.product;
    let reviewStar = product.reviewStar;
    let n = !!reviewStar
      ? reviewStar._1star +
        reviewStar._2star +
        reviewStar._3star +
        reviewStar._4star +
        reviewStar._5star
      : 0;
    return n;
  };
  loadReviewStar = () => {
    let totalStars = this.starsCount();
    let totalReviews = this.reviewsCount();
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
    return (
      <Container>
        <div className={style.productDetail}>
          <div className={style.productImage}>
            <img
              src={`${config.baseURL}${this.props.product.imageUrl}`}
              alt={this.props.product.title}
            />
          </div>
          <div className={style.productInfo}>
            <div className={style.general}>
              <h3 className={style.title}>{this.props.product.title}</h3>
              <div className={style.review}>
                Số sao: (
                {Math.round(this.starsCount() / this.reviewsCount()) || 0})
                {this.loadReviewStar()} | {this.reviewsCount()} đánh giá
              </div>
              <div className={style.price}>
                Giá:{" "}
                {!!this.props.product
                  ? `${parseCurrency(this.props.product.price)}đ`
                  : ""}{" "}
                |{this.props.product.stock} trong kho
              </div>
              <div className={style.quantity}>
                <button onClick={() => this.handleClick("-")}>-</button>
                <input
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
                <button onClick={() => this.handleClick("+")}>+</button>
              </div>
              <div className={style.action}>
                <button
                  disabled={this.state.quantity === 0}
                  onClick={() =>
                    this.props.addCartRequest(
                      this.props.product.id,
                      this.props.product,
                      this.state.quantity
                    )
                  }
                >
                  Thêm vào giỏ hàng
                </button>
                <button
                  disabled={this.state.quantity === 0}
                  onClick={() =>
                    this.props.buyNow(
                      this.props.product.id,
                      this.props.product,
                      this.state.quantity
                    )
                  }
                >
                  Mua ngay
                </button>
              </div>
            </div>
            <div className={style.description}>
              Mô tả sản phẩm: {this.props.product.description}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProductDetail: (productId) => {
      dispatch(getProductDetail(productId));
    },
    addCartRequest: (productId, product, quantity) =>
      dispatch(addCartRequest(productId, product, quantity)),
    buyNow: (productId, product, quantity) => {
      dispatch(addCartRequest(productId, product, quantity));
      dispatch(push("/cart"));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
