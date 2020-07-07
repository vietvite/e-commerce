import React from "react";
import style from "./LocationFilter.module.scss";
import CheckboxInput from "components/CheckboxInput/CheckboxInput";

class LocationFilter extends React.Component {
  render() {
    return (
      <div className={style.locationFilter}>
        <div className={style.title}>Lọc theo khu vực</div>
        <CheckboxInput>location 1</CheckboxInput>
        <CheckboxInput>location 2 location 2 </CheckboxInput>
        <CheckboxInput>location 3 location</CheckboxInput>
      </div>
    );
  }
}
export default LocationFilter;
