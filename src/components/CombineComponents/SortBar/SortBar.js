import React from "react";
import style from "./SortBar.module.scss";
import WhiteButton from "../../BaseComponents/WhiteButton/WhiteButton";
import SortDropDownButton from "../../BaseComponents/SortDropDownButton/SortDropDownButton";
import { ChevronLeft, ChevronRight } from "react-feather";

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 1,
    };
  }

  isActive = (index) => (index === this.state.activeButton ? true : false);

  onClick = (index) => {
    this.setState({ activeButton: index });
  };

  render() {
    return (
      <div className={style.sortBar}>
        <span className={`${style.paddingLeft} ${style.title}`}>
          Sắp xếp theo
        </span>
        <div className={`${style.paddingLeft} ${style.buttonArea}`}>
          <WhiteButton
            onClick={this.onClick}
            index={1}
            status={this.isActive(1)}
            sortBy="title"
          >
            Tên
          </WhiteButton>
          <WhiteButton
            onClick={this.onClick}
            index={2}
            status={this.isActive(2)}
            sortBy="date"
          >
            Mới nhất
          </WhiteButton>
          <SortDropDownButton
            onClick={this.onClick}
            index={4}
            status={this.isActive(4)}
            sortBy="price"
          />
        </div>
      </div>
    );
  }
}
export default SortBar;
