import React, { Component } from 'react'
import styles from './FavoriteItem.module.scss'
import { NavLink, Link } from 'react-router-dom'
import { Heart, Trash2 } from 'react-feather'
import ButtonLink from '../../BaseComponents/ButtonLink/ButtonLink'
import { parseCurrency } from '../../../commons'
import { connect } from 'react-redux'
import ButtonGraySm from '../../BaseComponents/ButtonGraySm/ButtonGraySm'

class FavoriteItem extends Component {
  render() {
    const { id, title, url, imageUrl, seller, price } = this.props

    return (
      <div className={styles.cartItem}>
        <div className={styles.detail}>
          <img alt='thumbnail' src={imageUrl} />
          <div>
            <p><NavLink className={styles.navLink} to={url}>
              {title}
            </NavLink></p>
            <p>Shop: <Link to={`/${seller.username}`}>{seller.fullname}</Link></p>
          </div>
          <div className={styles.price}>
            <p>{parseCurrency(price)}đ</p>
          </div>
        </div>

        <div className={styles.control}>
          <ButtonLink to={`/favorite/`} fullWidth={true}>
            <Heart size='0.9rem' strokeWidth='1.5px'
              style={{ marginRight: '0.125rem' }} />
            Add cart
          </ButtonLink>
          <ButtonGraySm onClick={() => this.props.removeProduct(id)} fullWidth={true} >
            <Trash2 size='0.9rem' strokeWidth='1.5px'
              style={{ marginRight: '0.125rem' }} />
            Xóa
          </ButtonGraySm>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  // removeFav: id => dispatch(() => ({}))
})


export default connect(null, mapDispatchToProps)(FavoriteItem)
