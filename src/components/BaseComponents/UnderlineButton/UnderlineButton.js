import React from "react";
import style from "./UnderlineButton.module.scss";

class UnderlineButton extends React.Component {
  render() {
    return (
      <button className={style.UnderlineButton}>{this.props.children}</button>
    );
  }
}
export default UnderlineButton;
