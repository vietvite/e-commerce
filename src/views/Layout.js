import React from "react";
import Header from "../components/CombineComponents/Header/Header";
import Footer from "../components/CombineComponents/Footer/Footer";
import Navbar from "../components/CombineComponents/Navbar/Navbar";
import AuthGroupButton from "../components/CombineComponents/AuthGroupButton/AuthGroupButton";
import AccountButton from "../components/CombineComponents/AccountButton/AccountButton";
import Modal from "../components/CombineComponents/Modal/Modal";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      form: 1,
    };
  }

  toggleFormModal = (form) => {
    this.setState({ showForm: !this.state.showForm });
    this.setState({ form: form });
  };

  render() {
    const authenticatedMenu = <AccountButton />;
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

        {this.state.showForm ? (
          <Modal
            form={this.state.form}
            toggleFormModal={this.toggleFormModal}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Layout;
