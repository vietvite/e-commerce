import React from "react";
import { connect } from "react-redux";
import {
  getProductByCategory,
  loadMoreCreator,
} from "../../../redux/product/actionCreator";
import Product from "../Product/Product";
import style from "./ProductPageContent.module.scss";

class ProductPageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
  }
  componentDidMount() {
    this.props.getProduct();
  }

  loadMore = () => {
    let location = window.location;
    let url = new URL(location.href);
    let categoryId = url.searchParams.get("categoryId");
    let page = Math.ceil(this.props.listProduct.length / 15);
    page++;
    this.props.loadMore(categoryId, page, this.props.sortCondition);
  };

  loadContent = () => {
    let list = this.props.listProduct.map((item) => (
      <Product key={item.id} item={item} />
    ));
    return list;
  };

  render() {
    return (
      <div className={style.productPageContent}>
        <div className={style.content}>{this.loadContent()}</div>
        <div className={style.loadMore}>
          <button onClick={this.loadMore}>Load more</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listProduct: state.product.list,
    sortCondition: state.product.sortCondition,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => {
      let url = new URL(window.location.href);
      dispatch(getProductByCategory(url.searchParams.get("categoryId")));
    },
    loadMore: (categoryId, page, sortCondition) =>
      dispatch(loadMoreCreator(categoryId, page, sortCondition)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContent);
