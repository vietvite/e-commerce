import React from "react";
import style from "./WhiteButton.module.scss";
import { connect } from "react-redux";
import { sortProduct } from "../../../redux/product/actionCreator";
import { getSortCondition } from "../../../redux/product/action";

class WhiteButton extends React.Component {
  handleClick = () => {
    this.props.getSortCondition();
    this.props.onClick(this.props.index);
    let url = new URL(window.location.href);
    let categoryId = url.searchParams.get("categoryId");
    let sortBy = this.props.sortBy;
    let sortCondition = this.props.sortCondition;
    sortCondition.sortBy = sortBy;
    this.props.sortProduct(categoryId, sortCondition);
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortProduct: (categoryId, sortCondition) => {
      dispatch(sortProduct(categoryId, sortCondition));
    },
    getSortCondition: () => {
      dispatch(getSortCondition());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WhiteButton);
