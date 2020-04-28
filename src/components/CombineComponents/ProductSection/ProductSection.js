import React from "react";
import style from "./ProductSection.module.scss";
import Product from "../Product/Product";
import { ChevronRight } from "react-feather";
import UnderlineButton from "../../BaseComponents/UnderlineButton/UnderlineButton";
import Container from "../Container/Container";
import { NavLink, Link } from "react-router-dom";
import { setSortCondition, setFilter } from "../../../redux/product/action";
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
              onClick={() =>
                this.props.setFilter(
                  this.props.list[0].category.id,
                  this.props.filter
                )
              }
              className={style.left}
            >
              {this.props.list[0].category.name}
              <ChevronRight />
            </NavLink>
            <div className={style.right}>
              <Link
                to={`/product?categoryId=${this.props.list[0].category.id}`}
                onClick={() =>
                  this.props.setFilter(
                    this.props.list[0].category.id,
                    this.props.filter
                  )
                }
              >
                <UnderlineButton
                  setSortCondition={() =>
                    this.props.setSortCondition({
                      sortBy: "createAt",
                      sortDirection: "descending",
                    })
                  }
                >
                  Mới nhất
                </UnderlineButton>
              </Link>
              <Link
                to={`/product?categoryId=${this.props.list[0].category.id}`}
                onClick={() =>
                  this.props.setFilter(
                    this.props.list[0].category.id,
                    this.props.filter
                  )
                }
              >
                <UnderlineButton
                  setSortCondition={() =>
                    this.props.setSortCondition({
                      sortBy: "price",
                      sortDirection: "descending",
                    })
                  }
                >
                  Giá giảm dần
                </UnderlineButton>
              </Link>
              <NavLink
                onClick={() =>
                  this.props.setFilter(
                    this.props.list[0].category.id,
                    this.props.filter
                  )
                }
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
const mapStateToProps = (state) => {
  return {
    filter: state.product.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSortCondition: (sortCondition) => {
      dispatch(setSortCondition(sortCondition));
    },
    setFilter: (categoryId, filter) => {
      dispatch(setFilter({ ...filter, categoryId, title: "" }));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
