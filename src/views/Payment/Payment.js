import React, { Component } from 'react'
import Container from '../../components/Container/Container'
import RedButtonLg from 'components/RedButtonLg/RedButtonLg'
import style from './Payment.module.scss'
import AddressForm from '../../components/AddressForm/AddressForm'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { parseCurrency, calcCostProductList } from 'commons'
import { getAddressRequest, accountDetailRequest, updateDeliveryInfoRequest, addBillRequest } from 'redux/payment/actionCreator'
import { setError } from 'redux/account/action'
import { setDeliveryInfo } from 'redux/payment/action'

class Payment extends Component {
  constructor() {
    super()
    this.state = {
      payments: 'cash',
      showAddressForm: true
    }
    this.radioChangeHandler = this.radioChangeHandler.bind(this)
    this.showAddressForm = this.showAddressForm.bind(this)
  }
  radioChangeHandler({ target: { name } }) {
    this.setState({
      payments: name
    })
  }
  componentDidMount() {
    this.props.requestDetailAccount()
    this.props.requestAddress()

  }
  showAddressForm(bool) {
    if (this.state.showAddressForm !== bool) {
      this.setState({
        showAddressForm: bool
      })
    }
  }


  render() {
    const DeliveryDate = () => (
      <>
        <h3>Giao hàng:</h3>
        <section>
          <p>Giao hàng vào ngày: {deliveryDate}</p>
        </section>
      </>
    )

    const PaymentMethod = () => (
      <>
        <h3>Chọn hình thức thanh toán:</h3>
        <section>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
              <input
                type='radio'
                name='cash'
                onChange={this.radioChangeHandler}
                checked={this.state.payments === 'cash'} />
                  Thanh toán tiền mặt khi nhận hàng
                </label>

            <label>
              <input
                type='radio'
                name='atm'
                onChange={this.radioChangeHandler}
                checked={this.state.payments === 'atm'} disabled />
                  Thẻ ATM nội địa/Internet Banking
                </label>
          </form>
        </section>
      </>
    )

    const {
      cart,
      totalPrice,
      shippingFee,
      freeShippingThreshold,
      deliveryDate
    } = this.props

    const totalCost = totalPrice > freeShippingThreshold
      ? totalPrice
      : totalPrice + shippingFee
    const shipping = totalPrice > freeShippingThreshold ? 0 : shippingFee

    return (
      <Container>
        <h1 className={style.title}>{this.state.showAddressForm ? 'Xác nhận thông tin giao hàng' : 'Thanh toán đơn hàng'}</h1>
        <div className={style.payment}>
          <div className={style.method}>
            {this.state.showAddressForm ? (
              <>
                <h2>1. Thông tin mua hàng</h2>
                <AddressForm
                  close={() => this.showAddressForm(false)}
                  onSubmit={this.props.updateDeliveryInfo}
                  error={this.props.error}
                  setError={this.props.setError}
                  setDeliveryInfo={this.props.setDeliveryInfo}
                  {...this.props.deliveryInfo} />
              </>
            ) : (
                <>
                  <h2>2. Thanh toán & đặt mua</h2>
                  <DeliveryDate />
                  <PaymentMethod />

                  <RedButtonLg onClick={this.props.addBillRequest}>Đặt hàng</RedButtonLg>
                </>
              )}
          </div>
          <div className={style.bill}>
            <h2>Thông tin đơn hàng</h2>
            <ul>
              {
                cart.map((product, i) => (
                  <li key={i}>
                    <NavLink to={`/detail/${product.id}`}>{product.title}</NavLink>
                    <p>{parseCurrency(product.price)}<span>x {product.quantity}</span></p>
                  </li>
                ))
              }
            </ul>
            <p>Ship: <span>{shipping
              ? `${parseCurrency(shipping)} đ` : 'Free shipping'}</span></p>
            <p className={style.totalPrice}>
              Tổng: <span>{parseCurrency(totalCost)} đ</span></p>
          </div>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.list,
  deliveryInfo: state.payment.deliveryInfo,
  shippingFee: state.payment.shippingFee,
  deliveryDate: state.payment.deliveryInfo.deliveryDate,
  totalPrice: ((state) => {
    const total = calcCostProductList(state.cart.list)
    const { shippingFee, freeShippingThreshold } = state.payment
    return total > freeShippingThreshold ? total : total + shippingFee
  })(state),
  error: state.account.errors
})

const mapDispatchToProps = dispatch => ({
  requestAddress: () => dispatch(getAddressRequest()),
  requestDetailAccount: () => dispatch(accountDetailRequest()),
  updateDeliveryInfo: deliveryInfo => dispatch(updateDeliveryInfoRequest(deliveryInfo)),
  setError: error => dispatch(setError(error)),
  setDeliveryInfo: info => dispatch(setDeliveryInfo(info)),
  addBillRequest: () => dispatch(addBillRequest()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Payment)