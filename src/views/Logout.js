import React, { Component } from 'react'
import { removeUser } from '../redux/account/action';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
    this.props.redirectHome();
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(removeUser()),
  redirectHome: () => dispatch(push('/'))
})

export default connect(() => ({}), mapDispatchToProps)(Logout)