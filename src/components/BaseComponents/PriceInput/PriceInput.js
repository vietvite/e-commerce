import React from "react";
import style from "./PriceInput.module.scss";

class PriceInput extends React.Component {
  render() {
    return (
      <input
        className={style.priceInput}
        type="number"
        placeholder={this.props.innerText}
      />
    );
  }
}
export default PriceInput;
