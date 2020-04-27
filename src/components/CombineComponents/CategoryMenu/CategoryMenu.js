import React from 'react'
import { Book, Tv, Headphones, Camera, Watch, Menu, Smartphone, Heart, Monitor, Airplay, ShoppingBag } from 'react-feather'
import DropdownMenu from '../../BaseComponents/DropdownMenu/DropdownMenu'
import styles from './CategoryMenu.module.scss'
import OutsideAlerter from '../../BaseComponents/OutsideAlerter/OutsideAlerter'
import { connect } from 'react-redux'
import { fetchCategoryIfNeeded } from '../../../redux/category/actionCreator'

const bookIcon = <span className={styles.icon}><Book className={styles.gray} strokeWidth='1.3px' size='1.3rem' /></span>
const phoneIcon = <span className={styles.icon}><Smartphone className={styles.red} strokeWidth='1.3px' size='1.3rem' /></span>
const tvIcon = <span className={styles.icon}><Tv className={styles.teal} strokeWidth='1.3px' size='1.3rem' /></span>
const fashionIcon = <span className={styles.icon}><Watch className={styles.blue} strokeWidth='1.3px' size='1.3rem' /></span>
const heart = <span className={styles.icon}><Heart className={styles.pink} strokeWidth='1.3px' size='1.3rem' /></span>
const laptop = <span className={styles.icon}><Monitor className={styles.blue} strokeWidth='1.3px' size='1.3rem' /></span>
const smartDevice = <span className={styles.icon}><Airplay className={styles.orange} strokeWidth='1.3px' size='1.3rem' /></span>
const fashionAccessories = <span className={styles.icon}><ShoppingBag className={styles.red} strokeWidth='1.3px' size='1.3rem' /></span>

const headPhoneIcon = <span className={styles.icon}><Headphones className={styles.orange} strokeWidth='1.3px' size='1.3rem' /></span>
const cameraIcon = <span className={styles.icon}><Camera className={styles.indigo} strokeWidth='1.3px' size='1.3rem' /></span>

const listIconMapping = {
  '/category/books': bookIcon,
  '/category/smartphone': phoneIcon,
  '/category/homeelectric': tvIcon,
  '/category/fashion': fashionIcon,
  '/category/health-beauty': heart,
  '/category/laptop': laptop,
  '/category/smartdigitals': smartDevice,
  '/category/fashion-accessories': fashionAccessories,

  '/digitalaccessories': headPhoneIcon,
  '/camera': cameraIcon,
}

class CategoryMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      showSideBar: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.delayCloseDropdown = this.delayCloseDropdown.bind(this)
  }

  componentDidMount() {
    this.props.fetchCategoryIfNeeded()
  }

  mapIcon() {
    return this.props.listCategory.map(category => ({
      ...category,
      icon: listIconMapping[category.url]
    }))
  }

  toggleDropdown() {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }

  delayCloseDropdown() {
    setTimeout(() => {
      this.toggleDropdown()
    }, 200);
  }

  render() {
    return (
      <>
        <button className={styles.Button}
          onClick={this.toggleDropdown}>
          <Menu style={{ marginRight: '0.5em' }} /> DANH MỤC SẢN PHẨM
        </button>

        {this.state.showSideBar && (
          <OutsideAlerter clickInsideCallback={this.delayCloseDropdown} clickOutsideCallback={this.toggleDropdown}>
            <DropdownMenu listMenu={this.mapIcon()} />
          </OutsideAlerter>
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  listCategory: state.category
})

const mapDisPatchToProps = dispatch => ({
  fetchCategoryIfNeeded: () => dispatch(fetchCategoryIfNeeded())
})

export default connect(mapStateToProps, mapDisPatchToProps)(CategoryMenu)
