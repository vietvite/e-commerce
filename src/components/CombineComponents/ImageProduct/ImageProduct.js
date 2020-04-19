import React from "react";
import styles from "./ImageProduct.module.scss";
class ImageProduct extends React.Component{
    render(){
        return(
            <div className={styles.ImageProduct}>
                <img alt='1' height='150px' width='150px' src="https://salt.tikicdn.com/cache/175x175/ts/product/14/91/01/c6cafb8778e0dfb0b9b9fde3a656c38c.jpg" />
            </div>
        )
    }
}
export default ImageProduct