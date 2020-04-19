import React from "react";
import style from "./OrangeButton.module.scss";

class OrangeButton extends React.Component {
  render() {
    return (
      <button type="submit" className={style.OrangeButton}>
        {this.props.children}
      </button>
    );
  }
}
export default OrangeButton;
