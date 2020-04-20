import React from "react";
import styles from './../Total/Total.module.scss'
class Total extends React.Component {
    render() {
        return (

            <div className={styles.sum}>
                <div className={styles.Total}>
                    <div className={styles.T}>
                        <p className={styles.P}>Tạm tính:</p>
                        <strong className={styles.pricetem}>319.000đ</strong>

                    </div>

                    <div className={styles.amount}>
                        <p className={styles.V}>
                            Thành tiền:
                        </p>
                        <div className={styles.vat}>
                            <span className={styles.pricevat}>319.000đ</span>
                            <br></br>
                            <div className={styles.vatcon}>
                                (Đã bao gồm VAT)
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.OrderButton} >
                    <button type="button" className={styles.btn} onClick>
                        Tiến hành đặt hàng
                </button>
                </div>
                <div className={styles.discountcode}>
                    <div className={styles.codecontent}>
                        Mã giảm giá/Quà tặng

                    </div>

                    <div className={styles.inputgroup}>
                        <input placeholder="nhập vào đây" className={styles.input} type="text">
                        </input>
                        <span className={styles.btninput}>
                            <button className={styles.input2}>
                                Đồng ý
                                </button>
                        </span>

                    </div>
                </div>

            </div>

        )
    }
}
export default Total