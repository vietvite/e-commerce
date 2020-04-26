import React from "react";
import styles from "./FormInput.module.scss";
import { Info } from "react-feather";

class FormInput extends React.Component {
  render() {
    const tooltip = (
      <div>
        <span className={styles.tooltip}>
          <Info size='1rem' />
          <span className={styles.tooltiptext}>{this.props.tooltipMessage}</span>
        </span>
      </div>
    )
    return (
      <div className={styles.formInput}>
        {this.props.tooltipMessage && tooltip}
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.textChangeHandler}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
export default FormInput;
