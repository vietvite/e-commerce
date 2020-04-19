import React from "react";
import style from "./SortDropDownButton.module.scss";

class SortDropDownButton extends React.Component {
  render() {
    return (
      <select className={style.sortDropDownButton}>
        <option value="" disabled selected hidden>
          Giá:
        </option>
        <option value="increase">Giá: Thấp đến Cao</option>
        <option value="decrease">Giá: Cao đến Thấp</option>
      </select>
    );
  }
}
export default SortDropDownButton;
