import React from "react";
import styles from "./CartShop.module.scss";

class CartShop extends React.Component {
    render() {
        return (
            <div className={styles.CartShop}>
                <p>Có 5 sản phẩm</p>
            </div>
        )
    }
}
export default CartShop