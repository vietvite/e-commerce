import React from 'react'
import styles from './CartItem.module.scss'
import { NavLink, Link } from 'react-router-dom'
import { parseCurrency } from '../../../commons'
import { BASE_URL } from 'config'

const CartItem = ({ id, title, url, imageUrl, seller, price, children }) => (
  <div className={styles.cartItem}>
    <div className={styles.detail}>
      <img alt='thumbnail' src={`${BASE_URL}${imageUrl}`} />
      <div>
        <p><NavLink className={styles.navLink} to={`/product/${id}`}>
          {title}
        </NavLink></p>
        <p>Shop: <Link to={`/${seller.username}`}>{seller.fullname}</Link></p>
      </div>
      <div className={styles.price}>
        <p>{parseCurrency(price)}đ</p>
      </div>
    </div>

    <div className={styles.control}>
      {children}
    </div>
  </div>
)

export default CartItem
