import React from "react";
import style from "./SortDropDownButton.module.scss";
import { connect } from "react-redux";
import { getProduct } from "../../../redux/product/actionCreator";

class SortDropDownButton extends React.Component {
  handleChange = (event) => {
    this.props.onClick(this.props.index);
    let sortBy = this.props.sortBy;
    let sortDirection = event.target.value;
    let sortCondition = { sortBy, sortDirection };
    this.props.sortProduct(this.props.filter, sortCondition);
  };
  render() {
    return (
      <select
        onChange={this.handleChange}
        className={`${style.whiteDropDownButton} ${
          this.props.status ? style.dropDownButtonSelected : ""
        }`}
      >
        <option value="" disabled hidden>
          Giá:
        </option>
        <option value="ascending">Giá: Thấp đến Cao</option>
        <option value="descending">Giá: Cao đến Thấp</option>
      </select>
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
    sortProduct: (filter, sortCondition) => {
      dispatch(getProduct(filter, sortCondition));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SortDropDownButton);
