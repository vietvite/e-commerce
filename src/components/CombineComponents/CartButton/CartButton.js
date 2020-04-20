import React from 'react'
import { ShoppingCart } from 'react-feather'
import ButtonTransparent from '../../BaseComponents/ButtonTransparent/ButtonTransparent'
import styles from './CartButton.module.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { countProductList } from '../../../commons'

function CartButton({ cartList }) {
  return (
    <div className={styles.cartBtn}>
      <Link to={'/cart'}>
        <ButtonTransparent>
          <ShoppingCart />
          <span className={styles.cartBackground}>
            <span className={styles.cartCount}>{countProductList(cartList)}</span>
          </span>
        </ButtonTransparent>
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  cartList: state.cart.list
})

export default connect(mapStateToProps)(CartButton)
