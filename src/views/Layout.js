import React from 'react'
import Header from '../components/CombineComponents/Header/Header'
import Footer from '../components/CombineComponents/Footer/Footer'
import Navbar from '../components/CombineComponents/Navbar/Navbar'
import AuthGroupButton from '../components/CombineComponents/AuthGroupButton/AuthGroupButton'
import AccountButton from '../components/CombineComponents/AccountButton/AccountButton'
import Banner from '../components/CombineComponents/Banner/Banner'


function Layout({ children, user }) {
  const authenticatedMenu = (
    <AccountButton />
  )
  const unAuthenticatedMenu = (
    <AuthGroupButton />
  )
  return (
    <div>
      <Header>
        {
          user ? authenticatedMenu : unAuthenticatedMenu
        }
      </Header>
      <Navbar />
      <Banner />
      {children}

      <Footer />
    </div>
  )
}

export default Layout
