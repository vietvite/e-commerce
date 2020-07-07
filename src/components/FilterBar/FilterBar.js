import React from "react";
import PriceFilter from "components/PriceFilter/PriceFilter";
import style from "./FilterBar.module.scss";
// import LocationFilter from "components/LocationFilter/LocationFilter";
import StarFilter from "components/StarFilter/StarFilter";
import FilterBottom from "components/FilterBottom/FilterBottom";
import { getProduct } from "redux/product/actionCreator";
import { setFilter } from "redux/product/action";
import { connect } from "react-redux";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceFrom: this.props.filter.priceFrom,
      priceTo: this.props.filter.priceTo,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <form className={style.filterBar} onSubmit={this.handleSubmit}>
        <h3>Bộ lọc tìm kiếm</h3>
        <PriceFilter />
        {/* <LocationFilter /> */}
        <StarFilter />
        <FilterBottom />
      </form>
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
    setFilter: (filter) => {
      dispatch(setFilter(filter));
    },
    getProduct: (filter, sortCondition) => {
      dispatch(getProduct(filter, sortCondition));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
