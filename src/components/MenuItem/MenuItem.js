import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";
// import { render } from '@testing-library/react'
import { setFilter } from "redux/product/action";
import { connect } from "react-redux";
import { getProduct } from "redux/product/actionCreator";
import { push } from "connected-react-router";

class MenuItem extends React.Component {
  onClick = () => {
    if (!!this.props.id) {
      this.props.getProduct(
        { ...this.props.filter, categoryId: this.props.id },
        this.props.sortCondition
      );
      this.props.redirect(`/product?categoryId=${this.props.id}`);
    }
  };
  render() {
    return (
      <NavLink
        to={
          !!this.props.id
            ? `/product?categoryId=${this.props.id}`
            : this.props.url
        }
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
    redirect: (url) => dispatch(push(url)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
