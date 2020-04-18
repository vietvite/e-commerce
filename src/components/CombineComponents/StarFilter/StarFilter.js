import React from "react";
import style from "./StarFilter.module.scss";
import StarRow from "../../BaseComponents/StarRow/StarRow";

class StarFilter extends React.Component {
  render() {
    var content = [];
    for (let i = 5; i >= 1; i--) {
      content.push(<StarRow key={i} stars={i} />);
    }
    return (
      <div className={style.starFilter}>
        <div className={style.title}>Lọc theo đánh giá</div>
        <div>{content}</div>
      </div>
    );
  }
}
export default StarFilter;
