import React from "react";
import style from "./StarFilter.module.scss";
import StarRow from "components/StarRow/StarRow";
import { setFilter } from "redux/product/action";
import { connect } from "react-redux";

class StarFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.filter.reviewStar,
    };
  }
  handleClick = (index) => {
    this.setState({ selectedIndex: index });
    let filter = this.props.filter;
    filter = { ...filter, reviewStar: index };
    this.props.setFilter(filter);
  };
  render() {
    var content = [];
    for (let i = 5; i >= 1; i--) {
      content.push(
        <StarRow
          selected={this.state.selectedIndex === i}
          index={i}
          onClick={this.handleClick}
          key={i}
          stars={i}
        />
      );
    }
    return (
      <div className={style.starFilter}>
        <div className={style.title}>Lọc theo đánh giá</div>
        <div>
          {content}
          <div>
            <button
              onClick={() => this.handleClick(0)}
              className={this.state.selectedIndex === 0 ? style.selected : ""}
            >
              Tất cả
            </button>
          </div>
        </div>
      </div>
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
    setFilter: (filter) => {
      dispatch(setFilter(filter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StarFilter);
