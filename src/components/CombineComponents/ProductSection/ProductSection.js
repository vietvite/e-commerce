import React from "react";
import style from "./ProductSection.module.scss";
import Product from "../Product/Product";
import { ChevronRight } from "react-feather";
import UnderlineButton from "../../BaseComponents/UnderlineButton/UnderlineButton";
import Container from "../Container/Container";
import { NavLink, Link } from "react-router-dom";
import { setSortCondition } from "../../../redux/product/action";
import { connect } from "react-redux";

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
        <div className={style.sectionProduct}>
          <div className={style.type}>
            <NavLink
              to={`/product?categoryId=${this.props.list[0].category.id}`}
              className={style.left}
            >
              {this.props.list[0].category.name}
              <ChevronRight />
            </NavLink>
            <div className={style.right}>
              <Link
                to={`/product?categoryId=${this.props.list[0].category.id}`}
              >
                <UnderlineButton
                  setSortCondition={() =>
                    this.props.setSortCondition({
                      sortBy: "createAt",
                      sortDirection: "descending",
                    })
                  }
                >
                  New Release
                </UnderlineButton>
              </Link>
              <Link
                to={`/product?categoryId=${this.props.list[0].category.id}`}
              >
                <UnderlineButton
                  setSortCondition={() =>
                    this.props.setSortCondition({
                      sortBy: "price",
                      sortDirection: "descending",
                    })
                  }
                >
                  Descending Price
                </UnderlineButton>
              </Link>
              <NavLink
                to={`/product?categoryId=${this.props.list[0].category.id}`}
              >
                <button className={style.lastButton}>See All</button>
              </NavLink>
            </div>
          </div>
          <div className={style.listProduct}>{this.state.content}</div>
        </div>
      </Container>
    );
  }
}
// export default ProductSection;

const mapDispatchToProps = (dispatch) => {
  return {
    setSortCondition: (sortCondition) => {
      dispatch(setSortCondition(sortCondition));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductSection);
