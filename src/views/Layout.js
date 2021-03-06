import React from "react";
import Header from "../components/CombineComponents/Header/Header";
import Footer from "../components/CombineComponents/Footer/Footer";
import Navbar from "../components/CombineComponents/Navbar/Navbar";
import AuthGroupButton from "../components/CombineComponents/AuthGroupButton/AuthGroupButton";
import AccountButton from "../components/CombineComponents/AccountButton/AccountButton";
import Modal from "../components/CombineComponents/Modal/Modal";
import { connect } from "react-redux";
import { fetchCartIfNeeded } from "../redux/cart/actionCreator";
import CheckAlert from "../components/BaseComponents/CheckAlert/CheckAlert";
import { toggleForm } from "../redux/form/action";

class Layout extends React.Component {
  render() {
    if (this.props.user && this.props.user.role === "ROLE_CUSTOMER") {
      setTimeout(() => {
        this.props.fetchCartIfNeeded()
      }, 500);
    }
    const authenticatedMenu = <AccountButton {...this.props.user} />;
    const unAuthenticatedMenu = (
      <AuthGroupButton toggleFormModal={this.toggleFormModal} />
    );

    return (
      <>
        <Header>
          {this.props.user ? authenticatedMenu : unAuthenticatedMenu}
        </Header>
        <Navbar />
        {this.props.children}

        <Footer />

        {this.props.form.showModal && !this.props.user ? (
          <Modal
            form={this.props.form.form}
            toggleFormModal={this.props.toggleModal}
          />
        ) : (
            ""
          )}
        {this.props.checkAlert && <CheckAlert />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.account.user,
  checkAlert: state.cart.checkAlert,
  form: state.form
})
const mapDispatchToProps = (dispatch) => ({
  fetchCartIfNeeded: () => dispatch(fetchCartIfNeeded()),
  toggleModal: () => dispatch(toggleForm())
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);