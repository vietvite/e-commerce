import React from "react";
import style from "./CheckAlert.module.scss";
import { hideCheckAlert } from "../../../redux/cart/action";
import { connect } from "react-redux";
import config from "../../../config";

class CheckAlert extends React.Component {
  componentDidMount() {
    setTimeout(this.props.hideCheckAlert, 1000);
  }

  render() {
    return (
      <div className={style.checkAlert} id="checkAlert">
        <img
          src={`${config.baseURL}/img/check.png`}
          alt="check"
        />
      </div>
    );
  }
}
// export default CheckAlert;
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hideCheckAlert: () => {
      dispatch(hideCheckAlert());
    },
  };
};

export default connect(null, mapDispatchToProps)(CheckAlert);
