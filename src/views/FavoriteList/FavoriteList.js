import React, { Component } from 'react'
import Container from './../../components/CombineComponents/Container/Container'
import { connect } from 'react-redux'
import { fetchFavoriteIfNeeded, removeFavoriteRequest, addCartRequest } from '../../redux/cart/actionCreator'
import style from './FavoriteList.module.scss'
import CartItem from '../../components/CombineComponents/CartItem/CartItem'
import ButtonGraySm from '../../components/BaseComponents/ButtonGraySm/ButtonGraySm'
import { Trash2, ShoppingCart } from 'react-feather'

class FavoriteList extends Component {
    componentDidMount() {
        this.props.fetchFavoriteIfNeeded()
    }
    showFavorites = (list) =>
        this.props.favoriteList.length
            ? (<div className={style.favoriteList}>
                <h2>Có <span>{this.props.favoriteList.length}</span> sản phẩm trong danh sách yêu thích</h2>
                {list.map((product, index) =>
                    <CartItem
                        key={index}
                        {...product}
                    >
                        <ButtonGraySm fullWidth={true} onClick={() => this.props.addCart(product.id, product)}>
                            <ShoppingCart />
                            Add cart
                        </ButtonGraySm>
                        <ButtonGraySm fullWidth={true} onClick={() => this.props.removeFav(product.id)} >
                            <Trash2 />
                            Xóa
                        </ButtonGraySm>
                    </CartItem>)}
            </div>
            ) : (<div></div>)
    render() {
        let listFav = this.props.favoriteList
        return (
            <Container>
                {this.showFavorites(listFav)}
            </Container>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        favoriteList: state.cart.favorites
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchFavoriteIfNeeded: () => dispatch(fetchFavoriteIfNeeded()),
    removeFav: (id) => dispatch(removeFavoriteRequest(id)),
    addCart: (productId, product) => dispatch(addCartRequest(productId, product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList)