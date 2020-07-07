import React from "react";
import style from "./OrangeButton.module.scss";
import { connect } from "react-redux";
import { getProduct } from "redux/product/actionCreator";

class OrangeButton extends React.Component {
  onClick = () => {
    let filter = this.props.filter;
    let sortCondition = this.props.sortCondition;
    this.props.getProduct(filter, sortCondition);
  };
  render() {
    return (
      <button
        onClick={this.onClick}
        type="submit"
        className={style.OrangeButton}
      >
        {this.props.children}
      </button>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    filter: state.product.filter,
    sortCondition: state.product.sortCondition,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (filter, sortCondition) => {
      dispatch(getProduct(filter, sortCondition));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrangeButton);
