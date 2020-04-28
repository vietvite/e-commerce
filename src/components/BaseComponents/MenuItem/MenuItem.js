import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";
// import { render } from '@testing-library/react'
import { setFilter } from "../../../redux/product/action";
import { connect } from "react-redux";
import { getProduct } from "../../../redux/product/actionCreator";

class MenuItem extends React.Component {
  onClick = () => {
    // this.props.setFilter(this.props.id, this.props.filter);
    this.props.getProduct({ ...this.props.filter , categoryId: this.props.id}, this.props.sortCondition);
  };
  render() {
    return (
      <NavLink
        to={`/product?categoryId=${this.props.id}`}
        className={styles.menuItem}
        onClick={this.onClick}
      >
        {this.props.icon}
        {this.props.name}
      </NavLink>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.product.filter,
    sortCondition: state.product.sortCondition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (categoryId, filter) => {
      dispatch(setFilter({ ...filter, categoryId, title: "" }));
    },
    getProduct: (filter, sortCondition) => {
      let url = new URL(window.location.href);
      let title = url.searchParams.get("title");
      if (!!title) {
        dispatch(
          getProduct({ ...filter, title, categoryId: "" }, sortCondition)
        );
      } else {
        let categoryId = filter.categoryId;
        dispatch(
          getProduct(
            { ...filter, categoryId: categoryId, title: "" },
            sortCondition
          )
        );
      }
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
