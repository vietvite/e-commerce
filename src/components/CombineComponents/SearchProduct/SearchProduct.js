import React, { Component } from "react";
import styles from "./SearchProduct.module.scss";
import { Search } from "react-feather";
import { connect } from "react-redux";
import {
  searchProduct,
  getProduct,
} from "../../../redux/product/actionCreator";

class SearchProduct extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  textChangeHandler({ target: { value } }) {
    this.setState({
      text: value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.doSearch(this.state.text);
  }

  render() {
    return (
      <div className={styles.searchForm}>
        <form onSubmit={this.submitHandler}>
          <input
            value={this.state.text}
            onChange={this.textChangeHandler}
            name="search"
            placeholder="Tìm kiếm"
          />
          <button type="submit" disabled={this.props.isFetching}>
            <Search />
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.product.fetching,
  filter: state.product.filter,
  sortCondition: state.product.sortCondition,
});

const mapDispatchToProps = (dispatch) => {
  return {
    doSearch: (title, filter, sortCondition) => {
      dispatch(getProduct({ ...filter, title }, sortCondition));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
