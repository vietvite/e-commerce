import React from "react";
import style from "./FilterBottom.module.scss";
import OrangeButton from "../../BaseComponents/OrangeButton/OrangeButton";

class FilterBottom extends React.Component {
  render() {
    return (
      <div className={style.filterBottom}>
        <OrangeButton>ÁP DỤNG</OrangeButton>
      </div>
    );
  }
}
export default FilterBottom;
