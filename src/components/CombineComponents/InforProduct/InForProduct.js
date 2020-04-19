import React from "react";
import styles from './InforProduct.module.scss'

class InforProduct extends React.Component{
    render(){
        return(
            <div className={styles.InforProduct}>
                <a href='#' className={styles.detail}> 
                    Điện Thoại Samsung Galaxy M30s (64GB/4GB) - Hàng Chính Hãng - Trắng Tinh Vân
                </a>
                <div className={styles.supply}> 
                    Cung cấp bởi Shopee
                </div>
                <div>
                <a>Xóa</a>
                <a>Để giành mua sau</a>
                </div>
                
            </div>
        )
    }
}
export default InforProduct
