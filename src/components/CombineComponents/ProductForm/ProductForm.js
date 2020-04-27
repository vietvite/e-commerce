import React from "react";
import style from "./ProductForm.module.scss";
import { getCategoryList } from "../../../redux/category/actionCreator";
import { connect } from "react-redux";
import {
  addNewProduct,
  editProduct,
} from "../../../redux/product/actionCreator";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.product.title || "",
      price: this.props.product.price || "",
      stock: this.props.product.stock || "",
      categoryId: !!this.props.product.category
        ? this.props.product.category.id
        : "",
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
    if (this.validateInfo()) {
      document.getElementById("productErr").innerText =
        "Thông tin sản phẩm không hợp lệ";
    } else {
      let category;
      for (let i = 0, n = this.props.categoryList.length; i < n; i++) {
        if (this.state.categoryId === this.props.categoryList[i].id) {
          category = this.props.categoryList[i];
          break;
        }
      }
      let button = event.target.innerText;
      if (button === "Tạo mới") {
        let product = {
          title: this.state.title,
          price: this.state.price,
          stock: this.state.stock,
          category: category,
          description: this.state.description,
          imageUrl: "",
          createAt: new Date(),
        };
        this.props.addProduct(product);
      } else {
        let product = {
          ...this.props.product,
          title: this.state.title,
          price: this.state.price,
          stock: this.state.stock,
          category: category,
          description: this.state.description,
          imageUrl: this.props.product.imageUrl,
          updateAt: new Date(),
        };
        this.props.editProduct(product);
      }
      this.props.toggleForm();
    }
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
    let content = [];
    content = categoryList.map((category, index) => {
      return (
        <option key={index} value={category.id}>
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
          <h3>Thông tin sản phẩm</h3>
          {!!this.props.product && (
            <label>ID: {this.props.product.id || ""}</label>
          )}
          <span id="productErr" className={style.err}></span>
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
            <select
              name="categoryId"
              type="text"
              onChange={this.handleChange}
              value={this.state.categoryId}
            >
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
            <button onClick={this.handleSubmit}>
              {!!this.props.product ? "Thay đổi" : "Tạo mới"}
            </button>
            <button onClick={this.props.toggleForm}>Hủy bỏ</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryList: state.category.categoryList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: () => {
      dispatch(getCategoryList());
    },
    addProduct: (product) => {
      dispatch(addNewProduct(product));
    },
    editProduct: (product) => {
      dispatch(editProduct(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
