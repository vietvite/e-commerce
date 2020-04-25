import React from 'react'
import { ChevronDown, FileText, Heart, Box, LogOut } from 'react-feather'
import ButtonTransparent from '../../BaseComponents/ButtonTransparent/ButtonTransparent'
import styles from './AccountButton.module.scss'
import DropdownMenu from '../../BaseComponents/DropdownMenu/DropdownMenu'
import OutsideAlerter from '../../BaseComponents/OutsideAlerter/OutsideAlerter'

const orderListIcon = <span className={styles.orderListIcon}><FileText color='white' strokeWidth='1px' size='1.2rem' /></span>
const favListIcon = <span className={styles.favListIcon}><Heart color='white' strokeWidth='1px' size='1.2rem' /></span>
const orderLaterIcon = <span className={styles.orderLaterIcon}><Box color='white' strokeWidth='1px' size='1.2rem' /></span>
const logOutIcon = <span className={styles.logOutIcon}><LogOut color='white' strokeWidth='1px' size='1.2rem' /></span>

const listMenu = [
  { icon: orderListIcon, name: 'Đơn hàng', url: '/bills', },
  { icon: favListIcon, name: 'Danh sách yêu thích', url: '/favorites' },
  { icon: orderLaterIcon, name: 'Danh sách mua sau', url: '/orderlater' },
  { icon: logOutIcon, name: 'Đăng xuất', url: '/logout' },
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
    const { fullname } = this.props
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
              <DropdownMenu listMenu={listMenu} />
            </div>
          </OutsideAlerter>
        )}
      </div>
    )
  }
}
