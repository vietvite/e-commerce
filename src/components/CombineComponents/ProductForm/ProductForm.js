import React from "react";
import style from "./ProductForm.module.scss";
import { getCategoryRequest } from "../../../redux/category/actionCreator";
import { connect } from "react-redux";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.product.title || "",
      price: this.props.product.price || "",
      stock: this.props.product.stock || "",
      category: this.props.product.category || "",
      description: this.props.product.description || "",
    };
  }

  componentDidMount() {
    this.props.getCategory();
  }

  validateInfo = () => {
    let { title, price, stock, category, description } = this.state;
    return !!title || !!price || !!stock || !!category || !!description
      ? false
      : true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // if (this.validateInfo()) {
    //   document
    //     .getElementById("productErr")
    //     .innerText("Thông tin sản phẩm không hợp lệ");
    // } else {
    //   let button = event.target.innerText;
    //   if (button === "Thêm mới") {

    //   }

    // }
  };

  handleClick = (event) => {
    let target = event.target;
    let container = document.getElementById("productModal");
    if (target === container) {
      this.props.toggleForm();
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loadCategory = () => {
    let categoryList = this.props.categoryList;
    let product = this.props.product;
    let categoryId = !!product ? product.category.id : null;
    let content = [];
    content = categoryList.map((category, index) => {
      return (
        <option
          key={index}
          selected={category.id === categoryId}
          value={categoryId}
        >
          {category.name}
        </option>
      );
    });

    return content;
  };

  render() {
    return (
      <div
        className={style.productForm}
        onClick={this.handleClick}
        id="productModal"
      >
        <form className={style.table}>
          <span id="productErr"></span>
          <h3>Thông tin sản phẩm</h3>
          {!!this.props.product && (
            <label>ID: {this.props.product.id || ""}</label>
          )}
          <label>
            Tên sản phẩm: <br />
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Giá: <br />
            <input
              name="price"
              type="text"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Trong kho: <br />
            <input
              name="stock"
              type="text"
              value={this.state.stock}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Loại: <br />
            <select name="category" type="text" onChange={this.handleChange}>
              {this.loadCategory()}
            </select>
          </label>
          <label>
            Mô tả: <br />
            <textarea
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <div className={style.tableFooter}>
            <button type="submit" onClick={this.handleSubmit}>
              {!!this.props.product ? "Thay đổi" : "Tạo mới"}
            </button>
            <button onClick={this.props.toggleForm}>Hủy bỏ</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categoryList: state.category.categoryList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategory: () => {
      dispatch(getCategoryRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
