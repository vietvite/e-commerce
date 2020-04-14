import React from 'react'
import Logo from '../Logo/Logo'
import SearchProduct from '../SearchProduct/SearchProduct'
import styles from './Header.module.scss'

function Header({ children }) {
  return (
    <header>
      <div className={styles.container}>
        <Logo />
        <SearchProduct />
        {/* Cart button */}

        {/* Account button */}
        {children}
      </div>
    </header >
  )
}

export default Header
