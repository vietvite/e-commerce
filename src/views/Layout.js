import React from 'react'
import Header from '../components/CombineComponents/Header/Header'
import Footer from '../components/CombineComponents/Footer/Footer'
import Navbar from '../components/CombineComponents/Navbar/Navbar'
import AuthGroupButton from '../components/CombineComponents/AuthGroupButton/AuthGroupButton'
import AccountButton from '../components/CombineComponents/AccountButton/AccountButton'
import { connect } from 'react-redux'

function Layout({ children, user = { fullname: 'Customer' } }) {
  const authenticatedMenu = (
    <AccountButton {...user} />
  )
  const unAuthenticatedMenu = (
    <AuthGroupButton />
  )
  return (
    <>
      <Header>
        {
          user ? authenticatedMenu : unAuthenticatedMenu
        }
      </Header>
      <Navbar />
      {children}

      <Footer />
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
