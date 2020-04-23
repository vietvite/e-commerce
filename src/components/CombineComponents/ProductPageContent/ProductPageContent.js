import React from "react";
import { connect } from "react-redux";
import {
  getProduct,
  loadMoreCreator,
} from "../../../redux/product/actionCreator";
import Product from "../Product/Product";
import style from "./ProductPageContent.module.scss";
import { setFilter } from "../../../redux/product/action";

class ProductPageContent extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.filter, this.props.sortCondition);
  }

  loadMore = () => {
    let page = Math.ceil(this.props.listProduct.length / 15);
    page++;
    this.props.loadMore(this.props.filter, this.props.sortCondition, page);
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
    filter: state.product.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (filter, sortCondition) => {
      let url = new URL(window.location.href);
      let categoryId = url.searchParams.get("categoryId");
      // dispatch(setFilter({ ...filter, categoryId }));
      dispatch(getProduct({ ...filter, categoryId }, sortCondition));
    },
    loadMore: (filter, sortCondition, page) =>
      dispatch(loadMoreCreator(filter, sortCondition, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContent);
