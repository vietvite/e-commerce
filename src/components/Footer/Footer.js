import React from "react";
import style from "./Footer.module.scss";
import Container from "components/Container/Container";
import { toggleForm, showFormSeller } from "redux/form/action";
import { connect } from "react-redux";

class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <Container>
          <p>Ecommerce Platform</p>
        </Container>
      </footer>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleModal: (event) => {
      event.preventDefault();
      dispatch(showFormSeller());
      dispatch(toggleForm());
    }
  }
}
export default connect(null, mapDispatchToProps)(Footer);
