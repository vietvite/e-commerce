import { connect } from "react-redux";
import { getHomeProductSection } from "redux/product/actionCreator";
import Home from "views/Home";

const mapStateToProps = (state) => ({
  listProduct: state.product.list,
})

const mapDispatchToProps = (dispatch) => ({
  getProduct: () => dispatch(getHomeProductSection()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);