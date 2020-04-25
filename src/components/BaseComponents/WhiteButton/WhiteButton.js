import React from "react";
import style from "./WhiteButton.module.scss";
import { connect } from "react-redux";
import { getProduct } from "../../../redux/product/actionCreator";

class WhiteButton extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
    let sortBy = this.props.sortBy;
    let sortCondition = this.props.sortCondition;
    sortCondition.sortBy = sortBy;
    sortCondition.sortDirection = "ascending";
    this.props.sortProduct(this.props.filter, sortCondition);
  };
  render() {
    return (
      <button
        value={this.props.sortBy}
        onClick={this.handleClick}
        className={`${style.whiteButton} ${
          this.props.status ? style.whiteButtonSelected : ""
        }`}
      >
        {this.props.children}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortCondition: state.product.sortCondition,
    filter: state.product.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortProduct: (filter, sortCondition) => {
      dispatch(getProduct(filter, sortCondition));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WhiteButton);
