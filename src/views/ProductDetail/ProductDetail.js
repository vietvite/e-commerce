import React from "react";
import style from "./ProductDetail.module.scss";
import { connect } from "react-redux";
import { getProductDetail } from "../../redux/product/actionCreator";
import Container from "../../components/CombineComponents/Container/Container";
import { Star } from "react-feather";
import { parseCurrency } from "../../commons";
import QuantityForm from "../../components/BaseComponents/QuantityForm/QuantityForm";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  componentWillMount() {
    let productId = this.props.match.params.productId;
    this.props.getProductDetail(productId);
  }

  handleClick = (operator) => {
    let quantity = this.state.quantity;
    if (operator === "-") {
      quantity--;
      quantity = quantity < 0 ? 0 : quantity;
    } else {
      quantity++;
    }
    this.setState({ quantity: quantity });
  };

  handleChange = (event) => {
    let quantity = event.target.value;
    quantity = parseInt(quantity) || 0;
    this.setState({ quantity: quantity });
  };
  starsCount = () => {
    let product = this.props.product;
    let reviewStar = product.reviewStar;
    let starsCount =
      reviewStar._1star * 1 +
      reviewStar._2star * 2 +
      reviewStar._3star * 3 +
      reviewStar._4star * 4 +
      reviewStar._5star * 5;
    return starsCount;
  };

  reviewsCount = () => {
    let product = this.props.product;
    let reviewStar = product.reviewStar;
    let n =
      reviewStar._1star +
      reviewStar._2star +
      reviewStar._3star +
      reviewStar._4star +
      reviewStar._5star;
    n = n <= 0 ? 0 : n;
    return n;
  };
  loadReviewStar = () => {
    let starsCount = this.starsCount();
    let reviewsCount = this.reviewsCount();
    let n = Math.round(starsCount / reviewsCount) || 0;
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };
  render() {
    return (
      <Container>
        <div className={style.productDetail}>
          <div className={style.productImage}>
            <img
              src={this.props.product.imageUrl}
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
                Giá: {parseCurrency(this.props.product.price)}đ |{" "}
                {this.props.product.stock} trong kho
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
                <button>Thêm vào giỏ hàng</button>
                <button>Mua ngay</button>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
