import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Component that exec callback if you click outside of it
 * 
 * @param clickOutsideCallback function call when click outside the wrapper.
 * @param clickInsideCallback function call when click inside the wrapper.
 * 
 * Set setTimeout delay when use to click link inside wrapper, 
 * before it execute callback.
 */
export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Execute callback clicked
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.clickOutsideCallback()
    } else {
      this.props.clickInsideCallback()
    }
  }

  render() {
    return <React.Fragment ref={this.setWrapperRef}>{this.props.children}</React.Fragment>;
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
  clickOutsideCallback: PropTypes.func.isRequired,
  clickInsideCallback: PropTypes.func.isRequired,
};