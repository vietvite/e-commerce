import React from "react";
import PriceFilter from "../PriceFilter/PriceFilter";
import style from "./FilterBar.module.scss";
// import LocationFilter from "../LocationFilter/LocationFilter";
import StarFilter from "../StarFilter/StarFilter";
import FilterBottom from "../FilterBottom/FilterBottom";

class FilterBar extends React.Component {
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
export default FilterBar;
