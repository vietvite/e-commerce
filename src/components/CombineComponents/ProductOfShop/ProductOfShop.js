import React from "react";
import style from "./ProductOfShop.module.scss";
import { parseCurrency } from "../../../commons";
import { Delete, X } from "react-feather";
import ProductForm from "../ProductForm/ProductForm";
import {
  addNewProduct,
  getProductOfShop,
  deleteProduct,
} from "../../../redux/product/actionCreator";
import { connect } from "react-redux";

class ProductOfShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      product: "",
    };
  }

  componentDidMount() {
    this.props.getProductOfShop();
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleDoubleClick = (product) => {
    this.setState({ showForm: !this.state.showForm, product });
  };
  handleClick = () => {
    this.setState({ product: "" }, this.toggleForm());
  };
  handleDelete = (productId) => {
    this.props.deleteProduct(productId);
  };
  render() {
    return (
      <div className={style.productOfShop}>
        <div className={style.header}>
          <button onClick={this.handleClick}>Thêm mới sản phẩm</button>
        </div>
        <table className={style.content}>
          <colgroup>
            <col width="40%" />
            <col width="30%" />
            <col width="15%" />
            <col width="10%" />
            <col width="5%" />
          </colgroup>
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Loại</th>
              <th>Giá</th>
              <th>Trong kho</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.listProduct.map((product, index) => {
              return (
                <tr
                  onDoubleClick={() => this.handleDoubleClick(product)}
                  key={index}
                  className={`${style.row} ${
                    index % 2 === 0 ? style.grayBackground2 : ""
                  }`}
                >
                  <td className={style.leftAlign}>{product.title}</td>
                  <td className={style.leftAlign}>{product.category.name}</td>
                  <td>{parseCurrency(product.price)}đ</td>
                  <td>{product.stock}</td>
                  <td>
                    <X
                      className={style.red}
                      onClick={() => this.handleDelete(product.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.showForm && (
          <ProductForm
            product={this.state.product}
            toggleForm={this.toggleForm}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listProduct: state.product.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductOfShop: () => {
      dispatch(getProductOfShop());
    },
    addNewProduct: (listProduct) => {
      dispatch(addNewProduct(listProduct));
    },
    deleteProduct: (productId) => {
      dispatch(deleteProduct(productId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOfShop);
