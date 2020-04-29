import React from "react";
import style from "./PriceInput.module.scss";
import { setFilter } from "../../../redux/product/action";
import { infinityNumber } from "../../../commons";
import { connect } from "react-redux";

class PriceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.filter[this.props.name],
    };
  }
  handlePriceChange = (event) => {
    let value = event.target.value;
    value = Number(value).toString();
    if (value > 0) {
      this.setState({ value: value });
      this.props.setFilter({
        ...this.props.filter,
        [this.props.name]: parseInt(value),
      });
    } else {
      if (this.props.name === "priceFrom") {
        this.setState({ value: 0 });
        this.props.setFilter({ ...this.props.filter, [this.props.name]: 0 });
      } else {
        this.setState({ value: infinityNumber() });
        this.props.setFilter({
          ...this.props.filter,
          [this.props.name]: infinityNumber(),
        });
      }
    }
  };

  render() {
    return (
      <input
        className={style.priceInput}
        name={this.props.name}
        type="number"
        placeholder={this.props.innerText}
        value={this.state.value}
        onChange={this.handlePriceChange}
      />
    );
  }
}
// export default PriceInput;
const mapStateToProps = (state) => {
  return {
    filter: state.product.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch(setFilter(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceInput);
