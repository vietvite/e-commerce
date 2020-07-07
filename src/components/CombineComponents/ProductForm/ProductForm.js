import React from "react";
import style from "./ProductForm.module.scss";
import { getCategoryRequest } from "../../../redux/category/actionCreator";
import { connect } from "react-redux";
import {
  addNewProduct,
  editProduct,
} from "../../../redux/product/actionCreator";
import http from "../../../api/http";
import FormInput from "components/FormInput/FormInput";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.product.title || "",
      price: this.props.product.price || 0,
      stock: this.props.product.stock || 0,
      categoryId: !!this.props.product.category
        ? this.props.product.category.id
        : this.props.categoryList[0].id,
      description: this.props.product.description || "",
      selectedFile: "",
    };
  }

  componentDidMount() {
    this.props.getCategory();
  }

  validateInfo = () => {
    let {
      title,
      price,
      stock,
      categoryId,
      description,
      selectedFile,
    } = this.state;
    return !!title &&
      !!price &&
      !!stock &&
      !!categoryId &&
      !!description &&
      !!selectedFile
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
          imageUrl: "/img/product/" + this.state.selectedFile,
          category: category,
          description: this.state.description,
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

  handleTextChange = (event) => {
    let value = event.target.value;
    this.setState({ [event.target.name]: value });
  };

  handleNumberChange = (event) => {
    let value = event.target.value;
    if (!!value === false) {
      this.setState({ [event.target.name]: 0 });
    } else {
      let number = parseInt(value);
      if (!!number) {
        this.setState({ [event.target.name]: number });
      }
    }
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

  handleFileChange = (event) => {
    event.preventDefault();
    this.setState(
      {
        selectedFile: event.target.files[0],
      },
      () => this.uploadImage()
    );
  };

  uploadImage = () => {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
    //Append the rest data then send
    http()
      .post("/product/image", formData)
      .then((res) => {
        this.setState({ selectedFile: res.data });
      })
      .catch((err) => {
        // console.log(err);
      });
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
          <span id="productErr" className={style.err}></span>
          {!!this.props.product && (
            <label>ID: {this.props.product.id || ""}</label>
          )}
          <label>
            Tên sản phẩm: <br />
            <FormInput
              type="text"
              name="title"
              value={this.state.title}
              textChangeHandler={this.handleTextChange}
            />
          </label>
          <label>
            Hình ảnh: <input type="file" onChange={this.handleFileChange} />
          </label>
          <label>
            Giá: <br />
            <FormInput
              type="number"
              name="price"
              value={this.state.price}
              textChangeHandler={this.handleNumberChange}
            />
          </label>
          <label>
            Số lượng hàng: <br />
            <FormInput
              type="number"
              name="stock"
              value={this.state.stock}
              textChangeHandler={this.handleNumberChange}
            />
          </label>
          <label>
            Loại: <br />
            <select
              name="categoryId"
              onChange={this.handleTextChange}
              value={this.state.categoryId}
            >
              {this.loadCategory()}
            </select>
          </label>
          <label>
            Mô tả: <br />
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleTextChange}
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
    categoryList: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: () => {
      dispatch(getCategoryRequest());
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
