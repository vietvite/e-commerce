import React from "react";
import style from "./UnderlineButton.module.scss";

class UnderlineButton extends React.Component {
  render() {
    return (
      <button
        className={style.UnderlineButton}
        onClick={this.props.setSortCondition}
      >
        {this.props.children}
      </button>
    );
  }
}
export default UnderlineButton;
