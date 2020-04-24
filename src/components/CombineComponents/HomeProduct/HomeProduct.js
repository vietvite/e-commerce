import React from "react";
import { connect } from "react-redux";
import { getHomeProductSection } from "../../../redux/product/actionCreator";
import ProductSection from "../ProductSection/ProductSection";


class HomeProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct();
  }
  loadContent = () => {
    let listProduct = this.props.listProduct;
    let content = [];
    let temp = [];

    if (listProduct.length > 0) {
      for (let i = 0, len = listProduct.length; i < len; i++) {
        if (i === 0) {
          temp.push(listProduct[i]);
        } else if (
          listProduct[i].category.id === listProduct[i - 1].category.id
        ) {
          temp.push(listProduct[i]);
        } else {
          content.push(<ProductSection key={i} list={temp} />);
          temp = [];
          temp.push(listProduct[i]);
        }
      }
      content.push(<ProductSection key={listProduct.length} list={temp} />);
    }
    return content;
  };

  render() {
    return <>{this.loadContent()}</>;
  }
}
const mapStateToProps = (state) => {
  return {
    listProduct: state.product.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => {
      dispatch(getHomeProductSection());
    }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeProduct);
