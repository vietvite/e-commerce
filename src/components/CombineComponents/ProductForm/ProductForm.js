import React from "react";
import style from "./ProductForm.module.scss";

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
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div
        className={style.productForm}
        onClick={this.handleClick}
        id="productModal"
      >
        <form className={style.table} onSubmit={this.handleSubmit}>
          <h3>Thông tin sản phẩm</h3>
          <label>ID: {this.props.product.id || ""}</label>
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
            <input
              name="category"
              type="text"
              value={this.state.category.name}
              onChange={this.handleChange}
            />
          </label>
          <label>Số sao đánh giá: {this.props.product.avarageStar || ""}</label>
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
            <button type="submit">Thay đổi</button>
            <button onClick={this.props.toggleForm}>Hủy bỏ</button>
          </div>
        </form>
      </div>
    );
  }
}
export default ProductForm;
