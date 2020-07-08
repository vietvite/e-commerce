import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import AccountButton from "components/AccountButton/AccountButton";
import { ROLE_CUSTOMER } from "globalConstants";
import ConnectedAuthGroupButton from "containers/ConnectedAuthGroupButton";
import ConnectedModal from "containers/ConnectedModal";

function Layout(props) {
  // Fetch cart for show cart quantity
  if (props.user && props.user.role === ROLE_CUSTOMER) {
    setTimeout(() => {
      props.fetchCartIfNeeded()
    }, 500);
  }

  const authenticatedMenu = <AccountButton {...props.user} />;
  const unAuthenticatedMenu = (
    <ConnectedAuthGroupButton />
  );

  return (
    <>
      <Header>
        {props.user ? authenticatedMenu : unAuthenticatedMenu}
      </Header>
      <Navbar />
      {props.children}

      <Footer />

      {props.form.showModal && !props.user ? (
        <ConnectedModal
          form={props.form.form}
          toggleFormModal={props.toggleModal}
        />
      ) : (
          ""
        )}
    </>
  );
}

export default Layout