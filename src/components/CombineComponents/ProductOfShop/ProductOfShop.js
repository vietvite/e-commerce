import React from "react";
import style from "./ProductOfShop.module.scss";
import { parseCurrency } from "../../../commons";
import { Delete, X } from "react-feather";
import ProductForm from "../ProductForm/ProductForm";
import {
  addNewProduct,
  getProductOfShop,
} from "../../../redux/product/actionCreator";
import { connect } from "react-redux";

const data = [
  {
    id: "5ea3c6ffb8bb2e1d6540180f",
    title: "product 1",
    price: 112311,
    description:
      "abcabc ksdlfkkhd lskdjh fkjsdh ghdfkghdkf hgkldhf gkl dsflkg kjsdfhgkljd\\n kjshdfkjls hdkljhsd fjk hgkldjsfh gkldsfjg ldksfh gjlksdf hjglhsdjfl glsdkf hgjklsd hfg",
    stock: 12,
    imageUrl: "/assets/productImage/product10.jpg",
    category: {
      id: "5ea560e77d0d4f053d12493d",
      name: "Điện thoại",
      url: "/category/smartphone",
      children: null,
    },
    seller: null,
    reviewStar: {
      _1star: 0,
      _2star: 0,
      _3star: 0,
      _4star: 0,
      _5star: 1,
    },
    createAt: "2020-04-21T17:00:00.000+0000",
    updateAt: null,
    avarageStar: 5,
  },
  {
    id: "5ea3c6ffb8bb2e1d6540180f",
    title: "product 2",
    price: 112311,
    description:
      "abcabc ksdlfkkhd lskdjh fkjsdh ghdfkghdkf hgkldhf gkl dsflkg kjsdfhgkljd\\n kjshdfkjls hdkljhsd fjk hgkldjsfh gkldsfjg ldksfh gjlksdf hjglhsdjfl glsdkf hgjklsd hfg",
    stock: 12,
    imageUrl: "/assets/productImage/product10.jpg",
    category: {
      id: "5ea560e77d0d4f053d12493e",
      name: "Máy tính",
      url: "/category/laptop",
      children: null,
    },
    seller: null,
    reviewStar: {
      _1star: 0,
      _2star: 0,
      _3star: 0,
      _4star: 0,
      _5star: 1,
    },
    createAt: "2020-04-21T17:00:00.000+0000",
    updateAt: null,
    avarageStar: 5,
  },
];
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

  loadContent = () => {
    let content = [];
    data.map((product) => {
      content.push(`<tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.category.name}</td>
      <td>{product.avarageStar}</td>
    </tr>`);
    });
    return content;
  };

  handleDoubleClick = (product) => {
    this.setState({ showForm: !this.state.showForm, product });
  };
  handleClick = () => {
    this.setState({ product: "" }, this.toggleForm());
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
            <col width="10%"/>
            <col width="5%"/>
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
                    <X className={style.red} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOfShop);
