import React from "react";
import style from "./SortDropDownButton.module.scss";
import { connect } from "react-redux";
import { sortProduct } from "../../../redux/product/actionCreator";

class SortDropDownButton extends React.Component {
  handleChange = (event) => {
    this.props.onClick(this.props.index);
    let url = new URL(window.location.href);
    let categoryId = url.searchParams.get("categoryId");
    let sortBy = this.props.sortBy;
    let sortDirection = event.target.value;
    let sortCondition = { sortBy, sortDirection };
    this.props.sortProduct(categoryId, sortCondition);
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

const mapDispatchToProps = (dispatch) => {
  return {
    sortProduct: (categoryId, sortCondition) => {
      dispatch(sortProduct(categoryId, sortCondition));
    },
  };
};
export default connect(null, mapDispatchToProps)(SortDropDownButton);
