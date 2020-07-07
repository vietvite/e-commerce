import React, { Component } from 'react'
import styles from './QuantityForm.module.scss'

export default class QuantityForm extends Component {
  constructor() {
    super()
    this.state = {}
    this.inputChangeHandler = this.inputChangeHandler.bind(this)
  }

  componentDidMount() {
    this.setState(Object.assign({}, this.state, {
      quantity: this.props.quantity
    }))
  }

  inputChangeHandler({ target: { value } }) {
    if (Number(value)) {
      this.props.updateQuantity(value)
    }
  }

  clickChangeHandler(number) {
    return (e) => {
      e.preventDefault()
      const isValid = this.props.quantity === 1 && number < 0

      if (!isValid) {
        this.props.updateQuantity(this.props.quantity + number)
      }
    }
  }

  render() {
    return (
      <div
        className={styles.controlQuantity}
        style={{
          width: this.props.fullWidth ? '100%' : false
        }}>
        <button
          type='button'
          className={styles.dec}
          onClick={this.clickChangeHandler(-1)}>-</button>
        <input
          className={styles.inputQuantity}
          value={this.props.quantity}
          onChange={this.inputChangeHandler} />
        <button
          type='button'
          className={styles.inc}
          onClick={this.clickChangeHandler(1)}>+</button>
      </div>
    )
  }
}
