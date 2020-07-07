import React from 'react'
import { ChevronDown, FileText, Heart, Box, LogOut, Archive, Clipboard } from 'react-feather'
import ButtonTransparent from 'components/ButtonTransparent/ButtonTransparent'
import styles from './AccountButton.module.scss'
import DropdownMenu from 'components/DropdownMenu/DropdownMenu'
import OutsideAlerter from 'components/OutsideAlerter/OutsideAlerter'

const orderListIcon = <span className={styles.orderListIcon}><FileText color='white' strokeWidth='1px' size='1.2rem' /></span>
const favListIcon = <span className={styles.favListIcon}><Heart color='white' strokeWidth='1px' size='1.2rem' /></span>
const orderLaterIcon = <span className={styles.orderLaterIcon}><Box color='white' strokeWidth='1px' size='1.2rem' /></span>
const logOutIcon = <span className={styles.logOutIcon}><LogOut color='white' strokeWidth='1px' size='1.2rem' /></span>

const listCustomerMenu = [
  { icon: orderListIcon, name: 'Đơn hàng', url: '/bills', },
  { icon: favListIcon, name: 'Danh sách yêu thích', url: '/favorites' },
  { icon: orderLaterIcon, name: 'Danh sách mua sau', url: '/orderlater' },
  { icon: logOutIcon, name: 'Đăng xuất', url: '/logout' },
]

const productIcon = <span className={styles.productIcon}><Archive color='white' strokeWidth='1px' size='1.2rem' /></span>
const pendingOrderIcon = <span className={styles.pendingOrderIcon}><FileText color='white' strokeWidth='1px' size='1.2rem' /></span>
const billIcon = <span className={styles.billIcon}><Clipboard color='white' strokeWidth='1px' size='1.2rem' /></span>

const listSellerMenu = [
  { icon: productIcon, name: 'Sản phẩm đang bán', url: '/shop/product' },
  { icon: pendingOrderIcon, name: 'Đơn hàng đang chờ', url: '/shop/order' },
  { icon: billIcon, name: 'Đơn hàng đã giao', url: '/shop/bills' },
  { icon: logOutIcon, name: 'Đăng xuất', url: '/logout' }
]

export default class AccountButton extends React.Component {
  constructor() {
    super()
    this.state = {
      dropdownOpen: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.delayToggle = this.delayToggle.bind(this)
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  /**
   * Delay dropdown closing, after click route be executed.
   * Use this because dropdown menu is using OutsideAlerter
   * which is immediately execute callback when click inside it.
   */
  delayToggle() {
    setTimeout(() => {
      this.toggleDropdown()
    }, 200);
  }
  render() {
    const { fullname, role } = this.props
    return (
      <div className={styles.account}>
        <div onMouseDown={this.toggleDropdown} >
          <ButtonTransparent>
            <span className={styles.buttonText}>{fullname}</span>
            <ChevronDown />
          </ButtonTransparent>
        </div>

        {this.state.dropdownOpen && (
          <OutsideAlerter clickOutsideCallback={this.toggleDropdown} clickInsideCallback={this.delayToggle} >
            <div className={styles.dropdownWrapper}>
              <DropdownMenu listMenu={role === 'ROLE_CUSTOMER' ? listCustomerMenu : listSellerMenu} />
            </div>
          </OutsideAlerter>
        )}
      </div>
    )
  }
}
