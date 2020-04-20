import React from "react";
import style from "./WhiteButton.module.scss";

class WhiteButton extends React.Component {
  render() {
    return (
      <button
        className={`${style.whiteButton} ${
          !!this.props.selected ? style.whiteButtonSelected : ""
        }`}
        // className={!!this.props.selected && style.selected}
      >
        {this.props.children}
      </button>
    );
  }
}
export default WhiteButton;
