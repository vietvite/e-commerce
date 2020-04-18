import React from "react";
import style from "./StarRow.module.scss";
import { Star } from "react-feather";

class StarRow extends React.Component {
  render() {
    const stars = this.props.stars;
    var row = [];
    for (let i = 0; i < stars; i++) {
      row.push(<Star key={i} color="yellow" />);
    }
    return <div className={style.starRow}>{row}</div>;
  }
}
export default StarRow;
