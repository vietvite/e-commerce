import React from 'react'
import { ShoppingCart } from 'react-feather'
import ButtonTransparent from '../../BaseComponents/ButtonTransparent/ButtonTransparent'
import styles from './CartButton.module.scss'

function CartButton({ cartCount = 12 }) {
  return (
    <div className={styles.cartBtn}>
      <ButtonTransparent>
        <ShoppingCart />
        <span className={styles.cartBackground}>
          <span className={styles.cartCount}>{cartCount}</span>
        </span>

      </ButtonTransparent>
    </div>
  )
}

export default CartButton
