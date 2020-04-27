import React from "react";
import style from "./SortBar.module.scss";
import WhiteButton from "../../BaseComponents/WhiteButton/WhiteButton";
import SortDropDownButton from "../../BaseComponents/SortDropDownButton/SortDropDownButton";
import { connect } from "react-redux";

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
  render() {
    return (
      <div className={style.sortBar}>
        <div className={style.left}>
          {!!this.props.listProduct
            ? this.props.listProduct[0].category.name
            : ""}
        </div>
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
    sortCondition: state.product.sortCondition,
    listProduct: state.product.list,
  };
};
export default connect(mapStateToProps)(SortBar);
