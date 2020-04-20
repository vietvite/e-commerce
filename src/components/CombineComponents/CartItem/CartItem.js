import React, { Component } from 'react'
import styles from './CartItem.module.scss'

export default class CartItem extends Component {
  render() {
    return (
      <div className={styles.CartItem}>
        <div className={styles.Productthumbnail}>
          <img alt='1' height='130px' width='130px' src="https://salt.tikicdn.com/cache/175x175/ts/product/14/91/01/c6cafb8778e0dfb0b9b9fde3a656c38c.jpg" />
        </div>
        <div className={styles.ProductInfo}>
          <a href='#' className={styles.detail}>
            Điện Thoại Samsung Galaxy M30s (64GB/4GB) - Hàng Chính Hãng - Trắng Tinh Vânại Samsung Galaxy M30s (64GB/4GB) - Hàng Chính Hãng - Trắng Tinh Vân
                </a>
          <div className={styles.supply}>
            Cung cấp bởi <a class={styles.provider} href='#'>Shopee</a>
          </div>
          <div className={styles.controlBox}>
            <a href='#' className={styles.controlItem}>Xóa</a>
            <a href='#' className={styles.controlItem}>Để giành mua sau</a>
          </div>

        </div>
        <div className={styles.ProductPrice}>
          <p className={styles.priceNow}>5.190.000đ</p>
          <p className={styles.discount}> <span className={styles.pricePre}>6.990.000đ</span>  | <span className={styles.precentDis}>-26%</span> </p>
        </div>
        <div className={styles.ProductOrderQuantity}>
          <div className={styles.controlQuantity}>
            <span className={styles.btnControlInc}>
              -
            </span>
            <input name='quantity' className={styles.inputQuantity} value='1' />
            <span className={styles.btnControlDes}>
              +
            </span>
          </div>
        </div>
      </div>
    )
  }
}
