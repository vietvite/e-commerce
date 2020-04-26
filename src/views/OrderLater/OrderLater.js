import React, { Component } from 'react'
import Container from '../../components/CombineComponents/Container/Container'
import { connect } from 'react-redux'
import style from './OrderLater.module.scss'
import { fetchOrderLaterIfNeeded, addBackToCartRequest, removeOrderLaterRequest } from '../../redux/cart/actionCreator'
import CartItem from '../../components/CombineComponents/CartItem/CartItem'
import ButtonGraySm from '../../components/BaseComponents/ButtonGraySm/ButtonGraySm'
import { ShoppingCart, Trash2 } from 'react-feather'

class OrderLater extends Component {
  componentDidMount() {
    this.props.fetchOrderLaterIfNeeded()
  }

  render() {
    return (
      <Container>
        {this.props.orderLaterList.length
          ? (
            <div className={style.OrderLater}>
              <h2>Có <span>{this.props.orderLaterList.length}</span> sản phẩm trong danh sách mua sau</h2>
              {this.props.orderLaterList.map((product, index) =>
                <CartItem
                  key={index}
                  {...product}
                  addCart={() => this.props.addCart(product.id, product)}>
                  <ButtonGraySm fullWidth={true} onClick={() => this.props.addCart(product.id, product)}>
                    <ShoppingCart />
                      Add cart
                  </ButtonGraySm>
                  <ButtonGraySm fullWidth={true} onClick={() => this.props.removeOrderLater(product.id)} >
                    <Trash2 />
                      Xóa
                  </ButtonGraySm>
                </CartItem>)}
            </div>
          ) : (<div></div>)
        }
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    orderLaterList: state.cart.orderLater
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchOrderLaterIfNeeded: () => dispatch(fetchOrderLaterIfNeeded()),
  addCart: (productId, product) => dispatch(addBackToCartRequest(productId, product)),
  removeOrderLater: (productId) => dispatch(removeOrderLaterRequest(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderLater)