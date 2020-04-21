import React from "react";
import RedButtonLg from "../../BaseComponents/RedButtonLg/RedButtonLg";
import style from './CartTotal.module.scss'
import { ChevronsRight } from "react-feather";
import { parseCurrency } from "../../../commons";

class CartTotal extends React.Component {
  render() {
    const { totalPrice, shippingFee, checkout } = this.props
    return (
      <div className={style.cartTotal}>
        <div >
          <p>Sản phẩm: <span>{parseCurrency(totalPrice)}đ</span></p>
          <p>Phí ship: <span>{parseCurrency(shippingFee)}đ</span></p>
          <hr />
          <p>Tổng: <span className={style.totalCost}>{parseCurrency(totalPrice + shippingFee)}đ</span></p>
        </div>
        <div onClick={checkout}>
          <RedButtonLg>
            Tiến hành đặt hàng
          <ChevronsRight />
          </RedButtonLg>
        </div>
      </div>
    )
  }
}

export default CartTotal