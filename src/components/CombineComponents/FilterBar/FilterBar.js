import React from "react";
import PriceFilter from "../PriceFilter/PriceFilter";
import style from "./FilterBar.module.scss";
import LocationFilter from "../LocationFilter/LocationFilter";
import StarFilter from "../StarFilter/StarFilter";
import FilterBottom from "../FilterBottom/FilterBottom";

class FilterBar extends React.Component {
  render() {
    return (
      <div className={style.filterBar}>
        <PriceFilter />
        <LocationFilter />
        <StarFilter />
        <FilterBottom />
      </div>
    );
  }
}
export default FilterBar;
