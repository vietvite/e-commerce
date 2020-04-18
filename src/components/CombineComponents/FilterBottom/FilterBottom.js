import React from "react";
import style from "./FilterBottom.module.scss";
import ColorButton from "../../BaseComponents/ColorButton/ColorButton";

class FilterBottom extends React.Component {
  render() {
    return (
      <div className={style.filterBottom}>
        <ColorButton>ÁP DỤNG</ColorButton>
      </div>
    );
  }
}
export default FilterBottom;
