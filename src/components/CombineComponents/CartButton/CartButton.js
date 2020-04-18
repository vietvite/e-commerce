import React from 'react'
import { ShoppingCart } from 'react-feather'
import ButtonTransparent from '../../BaseComponents/ButtonTransparent/ButtonTransparent'
import styles from './CartButton.module.scss'
import { Link } from 'react-router-dom'

function CartButton({ cartCount = 12 }) {
  return (
    <div className={styles.cartBtn}>
      <Link to={'/cart'}>
        <ButtonTransparent>
          <ShoppingCart />
          <span className={styles.cartBackground}>
            <span className={styles.cartCount}>{cartCount}</span>
          </span>
        </ButtonTransparent>
      </Link>
    </div>
  )
}

export default CartButton
