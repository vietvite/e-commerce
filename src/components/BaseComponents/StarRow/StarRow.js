import React from "react";
import style from "./StarRow.module.scss";
import { Star } from "react-feather";

class StarRow extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };
  render() {
    const stars = this.props.stars;
    var row = [];
    if (this.props.selected) {
      for (let i = 0; i < stars; i++) {
        row.push(<Star key={i} className={style.selected} />);
      }
    } else {
      for (let i = 0; i < stars; i++) {
        row.push(<Star key={i} />);
      }
    }
    return (
      <div className={style.starRow} onClick={this.handleClick}>
        {row}
      </div>
    );
  }
}
export default StarRow;
