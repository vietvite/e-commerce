import React from "react";
import style from "./ProductSection.module.scss";
import Product from "../Product/Product";
import { ChevronRight } from "react-feather";
import UnderlineButton from "../../BaseComponents/UnderlineButton/UnderlineButton";
import Container from "../Container/Container";

class ProductSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
  }
  componentDidMount() {
    var content = [];
    let listProduct = this.props.list;
    for (let i = 0, len = listProduct.length; i < len; i++) {
      content.push(<Product key={i} item={listProduct[i]} />);
    }
    this.setState({ content: content });
  }
  render() {
    return (
      <Container>
        <div className={style.sessionProduct}>
          <div className={style.type}>
            <div className={style.left}>
              Electric Product
              <ChevronRight />
            </div>
            <div className={style.right}>
              <UnderlineButton>New Release</UnderlineButton>
              <UnderlineButton>Top Sales</UnderlineButton>
              <button className={style.lastButton}>See All</button>
            </div>
          </div>
          <div className={style.listProduct}>{this.state.content}</div>
        </div>
      </Container>
    );
  }
}
export default ProductSection;
