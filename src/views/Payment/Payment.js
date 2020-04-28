import React, { Component } from 'react'
import Container from '../../components/CombineComponents/Container/Container'
import RedButtonLg from '../../components/BaseComponents/RedButtonLg/RedButtonLg'
import style from './Payment.module.scss'
import AddressForm from '../../components/CombineComponents/AddressForm/AddressForm'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { parseCurrency, calcCostProductList } from '../../commons'
import { getAddressRequest, accountDetailRequest, updateDeliveryInfoRequest } from '../../redux/payment/actionCreator'
import { setError } from '../../redux/account/action'
class Payment extends Component {
  constructor() {
    super()
    this.state = {
      payments: 'cash'
    }
    this.radioChangeHandler = this.radioChangeHandler.bind(this)
  }
  radioChangeHandler({ target: { name } }) {
    this.setState({
      payments: name
    })
  }
  componentDidMount() {
    Object.keys(this.props.account).length === 0
      && this.props.requestDetailAccount()
    Object.keys(this.props.address).length === 0
      && this.props.requestAddress()
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
      deliveryDate = '22/05/2020',
      address,
      cart,
      totalPrice,
      shippingFee,
      freeShippingThreshold
    } = this.props


    const { email, phoneNumber, fullname } = this.props.account

    const deliveryInfo = Object.assign({}, { email, phoneNumber, fullname, ...address })


    // console.log({ deliveryInfo });


    const [blankString] = Object.values(deliveryInfo).filter(notBlankString => !notBlankString)

    console.log({ blankString });
    console.log({ blankString: !!blankString });
    console.log({ blankString: !blankString });




    const totalCost = totalPrice > freeShippingThreshold
      ? totalPrice
      : totalPrice + shippingFee
    const shipping = totalPrice > freeShippingThreshold ? 0 : shippingFee

    return (
      <Container>
        <h1 className={style.title}>{blankString ? 'Thanh toán đơn hàng' : 'Xác nhận thông tin giao hàng'}</h1>
        <div className={style.payment}>
          <div className={style.method}>
            {blankString ? (
              <>
                <h2>2. Thanh toán & đặt mua</h2>
                <DeliveryDate />
                <PaymentMethod />

                <RedButtonLg>Đặt hàng</RedButtonLg>
              </>
            ) : (
                <>
                  <h2>1. Thông tin mua hàng</h2>
                  <AddressForm
                    onSubmit={this.props.updateDeliveryInfo}
                    error={this.props.error}
                    setError={this.props.setError}
                    {...deliveryInfo} />
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
  address: state.payment.address,
  shippingFee: state.payment.shippingFee,
  totalPrice: ((state) => {
    const total = calcCostProductList(state.cart.list)
    const { shippingFee, freeShippingThreshold } = state.payment
    return total > freeShippingThreshold ? total : total + shippingFee
  })(state),
  account: state.payment.account,
  error: state.account.errors
})

const mapDispatchToProps = dispatch => ({
  requestAddress: () => dispatch(getAddressRequest()),
  requestDetailAccount: () => dispatch(accountDetailRequest()),
  updateDeliveryInfo: deliveryInfo => dispatch(updateDeliveryInfoRequest(deliveryInfo)),
  setError: error => dispatch(setError(error)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Payment)