import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Layout({ children, user }) {
  const authenticatedMenu = (
    <div>
      {/* Account button */}
      Account button
    </div>
  )
  const unAuthenticatedMenu = (
    <div>
      {/* Login button */}
      Login
      {/* Sign up button */}
      Sign up
    </div>
  )
  return (
    <div>
      <Header>
        {
          user ? authenticatedMenu : unAuthenticatedMenu
        }
      </Header>
      <Navbar />

      {children}

      <Footer />
    </div>
  )
}

export default Layout
