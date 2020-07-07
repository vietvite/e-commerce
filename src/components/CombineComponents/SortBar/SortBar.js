import React from "react";
import style from "./SortBar.module.scss";
import WhiteButton from "components/WhiteButton/WhiteButton";
import SortDropDownButton from "components/SortDropDownButton/SortDropDownButton";
import { connect } from "react-redux";
import { getCategoryRequest } from "../../../redux/category/actionCreator";

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: this.props.sortCondition.sortBy,
    };
  }
  isActive = (sortBy) => (sortBy === this.state.sortBy ? true : false);
  onClick = (sortBy) => {
    this.setState({ sortBy: sortBy });
  };

  getTitle = () => {
    let url = new URL(window.location.href);
    if (!!url.searchParams.get("title")) {
      return "Kết quả tìm kiếm";
    } else {
      let categoryId = url.searchParams.get("categoryId");
      let category = this.props.categoryList.find(
        (category) => category.id === categoryId
      );
      return !!category ? category.name : "";
    }
  };

  render() {
    if (this.props.categoryList.length === 0) {
      this.props.getCategory();
    }
    return (
      <div className={style.sortBar}>
        <div className={style.left}>{this.getTitle()}</div>
        <div className={style.right}>
          <span className={style.title}>Sắp xếp theo</span>
          <div className={style.buttonArea}>
            <WhiteButton
              onClick={this.onClick}
              status={this.isActive("title")}
              sortBy="title"
            >
              Tên
            </WhiteButton>
            <WhiteButton
              onClick={this.onClick}
              status={this.isActive("createAt")}
              sortBy="createAt"
            >
              Mới nhất
            </WhiteButton>
            <SortDropDownButton
              onClick={this.onClick}
              status={this.isActive("price")}
              sortBy="price"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.product.filter,
    categoryList: state.category,
    sortCondition: state.product.sortCondition,
    listProduct: state.product.list,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategory: () => {
      dispatch(getCategoryRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SortBar);
