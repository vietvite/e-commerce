import React, { Component } from 'react'
import Container from './../../components/CombineComponents/Container/Container'
import FavoriteItem from './../../components/CombineComponents/FavoriteItem/FavoriteItem'
import { connect } from 'react-redux'

class FavoriteList extends Component {


    showFavorites = (list) => {
        if (!list)
            return []
        return list.map((item, index) => {
            return <FavoriteItem key={index} item={item}></FavoriteItem>
        })
    }

    render() {
        let listFav = this.props.favoriteList
        console.log(listFav);

        return (
            <Container>
                {this.showFavorites(listFav)}
            </Container>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        favoriteList: state.favorite
    }
}


export default connect(mapStateToProps)(FavoriteList)