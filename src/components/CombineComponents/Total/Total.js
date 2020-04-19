import React from "react";
import styles from './../Total/Total.module.scss'
class Total extends React.Component{
    render(){
        return(
            <div className={styles.Total}>
              <div className={styles.T}>
                <p className={styles.P}>Thành tiền:</p>
                  
              </div>

              <div>
                  <p className={styles.V}>
                      Thanh toán:
                  </p>
              </div>
            </div>
        )
    }
}
export default Total