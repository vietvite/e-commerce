import React, { Component } from 'react'
import CartShop from './../components/CombineComponents/CartShop/CartShop'
import ShopTotal from './../components/CombineComponents/ShopTotal/ShopTotal'
import OrderProduct from './../components/CombineComponents/OrderProduct/OrderProduct'
import Container from './../components/CombineComponents/Container/Container'
class Cart extends Component {
  render() {
    return (
      <Container>
        <CartShop />
        <ShopTotal/>
        <OrderProduct />
      </Container>
    )
  }
}
export default Cart