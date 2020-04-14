import React from 'react'
import { User, ChevronDown } from 'react-feather'
import ButtonTransparent from '../../BaseComponents/ButtonTransparent/ButtonTransparent'
import styles from './AccountButton.module.scss'
import DropdownMenu from '../../BaseComponents/DropdownMenu/DropdownMenu'

// NOTE: Get from redux
const listMenu = [
  { name: 'Đơn hàng', url: '/cart' },
  { name: 'Danh sách yêu thích', url: '/favorites' },
  { name: 'Đăng xuất', url: '/logout' },
]

export default class AccountButton extends React.Component {
  constructor() {
    super()
    this.state = {
      dropdownOpen: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
  render() {
    const { username = 'Username' } = this.props
    return (
      <div>
        <div onMouseDown={this.toggleDropdown} >
          <ButtonTransparent>
            <span className={styles.buttonText}>{username}</span>
            <ChevronDown />
          </ButtonTransparent>
        </div>

        {this.state.dropdownOpen && (
          <div className={styles.dropdownWrapper}>
            <DropdownMenu listMenu={listMenu} />
          </div>
        )}
      </div>
    )
  }
}
