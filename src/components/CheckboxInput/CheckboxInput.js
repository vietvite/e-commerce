import React from "react";
import style from "./CheckboxInput.module.scss";

class CheckboxInput extends React.Component {
  render() {
    return (
      <label className={style.checkboxInput}>
        <input type="checkbox" />
        {this.props.children}{" "}
      </label>
    );
  }
}
export default CheckboxInput;
