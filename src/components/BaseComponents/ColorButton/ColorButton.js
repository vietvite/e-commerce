import React from "react";
import style from "./ColorButton.module.scss";

class ColorButton extends React.Component {
  render() {
    return (
      <button type="submit" className={style.colorButton}>
        {this.props.children}
      </button>
    );
  }
}
export default ColorButton;
