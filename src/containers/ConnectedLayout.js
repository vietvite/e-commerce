import { connect } from 'react-redux'
import Layout from 'views/Layout';
import { fetchCartIfNeeded } from "redux/cart/actionCreator";
import { toggleForm } from "redux/form/action";

const mapStateToProps = state => ({
  user: state.account.user,
  form: state.form
})

const mapDispatchToProps = (dispatch) => ({
  fetchCartIfNeeded: () => dispatch(fetchCartIfNeeded()),
  toggleModal: () => dispatch(toggleForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout)