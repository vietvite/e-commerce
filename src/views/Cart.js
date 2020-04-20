import React, { Component } from 'react'
import CartShop from './../components/CombineComponents/CartShop/CartShop'
import ShopTotal from './../components/CombineComponents/ShopTotal/ShopTotal'

import Container from './../components/CombineComponents/Container/Container'
class Cart extends Component {

  render() {
    return (
      <Container>
        <CartShop />
        <ShopTotal />
      </Container>
    )
  }
}
export default Cart