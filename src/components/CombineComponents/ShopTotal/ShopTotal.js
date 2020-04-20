import React from "react";
import Total from './../Total/Total'
import ShoppingCart from './../ShoppingCart/ShoppingCart'
import styles from './ShopTotal.module.scss'

class ShopTotal extends React.Component {
    render() {
        return (
            <div className={styles.ShopTotal}>
                <div className={styles.left}>
                    <ShoppingCart />
                </div>
                <div className={styles.right}>
                    <Total />

                </div>


            </div>
        )
    }
}
export default ShopTotal