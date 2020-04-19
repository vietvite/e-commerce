import React from "react";
import styles from "./ShoppingCart.module.scss";
import CartItem from '../CartItem/CartItem'


class ShoppingCart extends React.Component{
    render(){
        return(
            <div className={styles.ShoppingCart}>
                <CartItem></CartItem>
            </div>
        )
    }
}
export default ShoppingCart