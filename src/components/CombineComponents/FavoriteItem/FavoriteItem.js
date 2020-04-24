import React, { Component } from 'react'
import styles from './FavoriteItem.module.scss'
import { NavLink, Link } from 'react-router-dom'
import { Heart, Trash2 } from 'react-feather'
import ButtonLink from '../../BaseComponents/ButtonLink/ButtonLink'
import { parseCurrency } from '../../../commons'
import { connect } from 'react-redux'
import ButtonGraySm from '../../BaseComponents/ButtonGraySm/ButtonGraySm'
import Container from '../../CombineComponents/Container/Container'
import { removeFavorite } from '../../../redux/favorite/action'

class FavoriteItem extends Component {
  render() {
    const { id, title, url, imageUrl, price, seller } = this.props.item
    console.log(this.props);


    return (
      <Container>
        <div className={styles.cartItem}>
          <div className={styles.detail}>
            <img alt='thumbnail' src={imageUrl} />
            <div>
              <p><NavLink className={styles.navLink} to='/'>
                {title}
              </NavLink></p>
              <p>Shop: <Link to='#'>{seller && seller.fullname}</Link></p>
            </div>
            <div className={styles.price}>
              <p>{price}đ</p>
            </div>
          </div>

          <div className={styles.control}>
            <ButtonLink to={`/favorite/`} fullWidth={true}>
              <Heart size='0.9rem' strokeWidth='1.5px'
                style={{ marginRight: '0.125rem' }} />
            Add cart
          </ButtonLink>
            <ButtonGraySm fullWidth={true} onClick={() => this.props.removeFav(id)} >
              <Trash2 size='0.9rem' strokeWidth='1.5px'
                style={{ marginRight: '0.125rem' }} />
            Xóa
          </ButtonGraySm>
          </div>
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeFav: (id) => {
      dispatch(removeFavorite(id))
    }
  }
}


export default connect(null, mapDispatchToProps)(FavoriteItem)
