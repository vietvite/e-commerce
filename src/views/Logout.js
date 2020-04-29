import React, { Component } from 'react'
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { logout } from '../redux/account/actionCreator';

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
    this.props.redirectHome();
  }
  render() {
    return (
      <div></div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  redirectHome: () => dispatch(push('/'))
})

export default connect(() => ({}), mapDispatchToProps)(Logout)