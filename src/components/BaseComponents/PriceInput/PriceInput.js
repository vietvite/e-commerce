import React from "react";
import style from "./PriceInput.module.scss";

class PriceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handlePriceChange = (event) => {
    let value = parseInt(event.target.value);
    if (value >= 0) {
      this.setState({ value: value });
    } else {
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <input
        className={style.priceInput}
        type="number"
        placeholder={this.props.innerText}
        value={this.state.value}
        onChange={this.handlePriceChange}
      />
    );
  }
}
export default PriceInput;
