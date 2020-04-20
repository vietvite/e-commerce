import React from 'react'
import { Book, Tv, Headphones, Camera, Watch, Menu, Smartphone } from 'react-feather'
import DropdownMenu from '../../BaseComponents/DropdownMenu/DropdownMenu'
import styles from './CategoryMenu.module.scss'
import OutsideAlerter from '../../BaseComponents/OutsideAlerter/OutsideAlerter'

const bookIcon = <span className={styles.icon}><Book className={styles.gray} strokeWidth='1.3px' size='1.3rem' /></span>
const phoneIcon = <span className={styles.icon}><Smartphone className={styles.red} strokeWidth='1.3px' size='1.3rem' /></span>
const tvIcon = <span className={styles.icon}><Tv className={styles.teal} strokeWidth='1.3px' size='1.3rem' /></span>
const headPhoneIcon = <span className={styles.icon}><Headphones className={styles.orange} strokeWidth='1.3px' size='1.3rem' /></span>
const cameraIcon = <span className={styles.icon}><Camera className={styles.indigo} strokeWidth='1.3px' size='1.3rem' /></span>
const fashionIcon = <span className={styles.icon}><Watch className={styles.blue} strokeWidth='1.3px' size='1.3rem' /></span>

const listMenu = [
  { icon: bookIcon, name: 'Nhà sách', url: '/books', },
  { icon: phoneIcon, name: 'Điện thoại & Máy tính bảng', url: '/smartphoneandtablet' },
  { icon: tvIcon, name: 'Điện gia dụng', url: '/electric' },
  { icon: headPhoneIcon, name: 'Phụ kiện & Thiết bị số', url: '/digitalaccessories' },
  { icon: cameraIcon, name: 'Nhiếp ảnh', url: '/camera' },
  { icon: fashionIcon, name: 'Thời trang', url: '/fashion' },
]

class CategoryMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      showSideBar: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.delayCloseDropdown = this.delayCloseDropdown.bind(this)
  }

  toggleDropdown() {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }

  delayCloseDropdown() {
    setTimeout(() => {
      this.toggleDropdown()
    }, 150);
  }

  render() {
    return (
      <>
        <button className={styles.Button}
          onClick={() => this.setState({ showSideBar: !this.state.showSideBar })}>
          <Menu style={{ marginRight: '0.5em' }} /> DANH MỤC SẢN PHẨM
        </button>

        {this.state.showSideBar && (
          <OutsideAlerter clickInsideCallback={this.delayCloseDropdown} clickOutsideCallback={this.toggleDropdown}>
            <DropdownMenu listMenu={listMenu} />
          </OutsideAlerter>
        )}
      </>
    )
  }
}

export default CategoryMenu
