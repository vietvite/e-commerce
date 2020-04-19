import React, { Component } from 'react'
import styles from './CartItem.module.scss'
import ImageProduct from './../ImageProduct/ImageProduct'
import InforProduct from './../InforProduct/InForProduct'
import Price from './../Price/Price'
import ChangeQuantity from './../ChangeQuantity/ChangeQuantity'

export default class CartItem extends Component {
    render() {
        return (
            <div className={styles.CartItem}>
                <ImageProduct />
                <InforProduct />
                <Price />
                <ChangeQuantity/>
            </div>
        )
    }
}
