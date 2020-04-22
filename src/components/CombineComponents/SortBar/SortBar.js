import React from "react";
import style from "./SortBar.module.scss";
import WhiteButton from "../../BaseComponents/WhiteButton/WhiteButton";
import SortDropDownButton from "../../BaseComponents/SortDropDownButton/SortDropDownButton";
import { ChevronLeft, ChevronRight } from "react-feather";

class SortBar extends React.Component {
  render() {
    return (
      <div className={style.sortBar}>
        <span className={`${style.paddingLeft} ${style.title}`}>
          Sắp xếp theo
        </span>
        <div className={`${style.paddingLeft} ${style.buttonArea}`}>
          <WhiteButton selected>Phổ biến</WhiteButton>
          <WhiteButton>Mới nhất</WhiteButton>
          <WhiteButton>Bán chạy</WhiteButton>
          <SortDropDownButton />
        </div>
      </div>
    );
  }
}
export default SortBar;
