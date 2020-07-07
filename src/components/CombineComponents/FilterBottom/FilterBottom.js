import React from "react";
import style from "./FilterBottom.module.scss";
import OrangeButton from "components/OrangeButton/OrangeButton";
import { getProduct } from "../../../redux/product/actionCreator";
import { connect } from "react-redux";

class FilterBottom extends React.Component {
  render() {
    return (
      <div className={style.filterBottom}>
        <OrangeButton>ÁP DỤNG</OrangeButton>
      </div>
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
    setFilter: (filter, sortCondition) => {
      dispatch(getProduct(filter, sortCondition));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterBottom);
