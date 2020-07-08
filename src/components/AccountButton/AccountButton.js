import React, { useState } from 'react'
import styles from './AccountButton.module.scss'
import { ChevronDown, FileText, Heart, Box, LogOut, Archive, Clipboard } from 'react-feather'
import ButtonTransparent from 'components/ButtonTransparent/ButtonTransparent'
import DropdownMenu from 'components/DropdownMenu/DropdownMenu'
import OutsideAlerter from 'components/OutsideAlerter/OutsideAlerter'
import { ROLE_CUSTOMER } from 'globalConstants'

const orderListIcon = <span className={styles.orderListIcon}><FileText color='white' strokeWidth='1px' size='1.2rem' /></span>
const favListIcon = <span className={styles.favListIcon}><Heart color='white' strokeWidth='1px' size='1.2rem' /></span>
const orderLaterIcon = <span className={styles.orderLaterIcon}><Box color='white' strokeWidth='1px' size='1.2rem' /></span>
const logOutIcon = <span className={styles.logOutIcon}><LogOut color='white' strokeWidth='1px' size='1.2rem' /></span>

const listCustomerMenu = [
  { icon: orderListIcon, name: 'Đơn hàng', url: '/customer/bills', },
  { icon: favListIcon, name: 'Danh sách yêu thích', url: '/customer/favorites' },
  { icon: orderLaterIcon, name: 'Danh sách mua sau', url: '/customer/orderlater' },
  { icon: logOutIcon, name: 'Đăng xuất', url: '/customer/logout' },
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

export default function AccountButton(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className={styles.account}>
      <div onMouseDown={toggleDropdown} >
        <ButtonTransparent>
          <span className={styles.buttonText}>{props.fullname}</span>
          <ChevronDown />
        </ButtonTransparent>
      </div>

      {dropdownOpen && (
        <OutsideAlerter clickOutsideCallback={toggleDropdown} clickInsideCallback={delayToggle} >
          <div className={styles.dropdownWrapper}>
            <DropdownMenu listMenu={props.role === ROLE_CUSTOMER ? listCustomerMenu : listSellerMenu} />
          </div>
        </OutsideAlerter>
      )}
    </div>
  )

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen)
  }

  /**
   * Delay dropdown closing, after click route be executed.
   * Use this because dropdown menu is using OutsideAlerter
   * which is immediately execute callback when click inside it.
   */
  function delayToggle() {
    setTimeout(() => {
      toggleDropdown()
    }, 200);
  }
}
