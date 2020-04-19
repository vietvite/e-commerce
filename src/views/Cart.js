import React, { Component } from 'react'
import CartShop from './../components/CombineComponents/CartShop/CartShop'
import ShopTotal from './../components/CombineComponents/ShopTotal/ShopTotal'
import OrderProduct from './../components/CombineComponents/OrderProduct/OrderProduct'
import Container from './../components/CombineComponents/Container/Container'
class Cart extends Component {
  render() {
    return (
      <Container>
        <div className={styles.CartShop}>
          <h5 className={styles.content}>
          Giỏ hàng
          <span>
              1 sản phẩm
          </span>
          </h5>
        </div>
        <ShopTotal/>
        <OrderProduct />
      </Container>
    )
  }
}
export default Cart