import React from 'react'
import Logo from 'components/Logo/Logo'
import SearchProduct from 'components/SearchProduct/SearchProduct'
import styles from './Header.module.scss'
import CartButton from 'components/CartButton/CartButton'

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
