import React from 'react'
import Logo from '../Logo/Logo'
import SearchProduct from '../SearchProduct/SearchProduct'
import styles from './Header.module.scss'
import CartButton from '../CartButton/CartButton'

function Header({ children }) {
  return (
    <header>
      <div className={styles.container}>
        <Logo />
        <SearchProduct />
        {/* Account button */}
        {children}
        <CartButton />
      </div>
    </header >
  )
}

export default Header
