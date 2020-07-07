import React from "react";
import RedButtonLg from "components/RedButtonLg/RedButtonLg";
import style from './CartTotal.module.scss'
import { ChevronsRight } from "react-feather";
import { parseCurrency } from "commons";
import { NavLink } from "react-router-dom";

class CartTotal extends React.Component {
  render() {
    const { totalPrice, shipping } = this.props
    return (
      <div className={style.cartTotal}>
        <div >
          <p>Sản phẩm: <span>{parseCurrency(totalPrice)}đ</span></p>
          <p>Phí ship: <span>{shipping ? `${parseCurrency(shipping)} đ` : 'Free shipping'}</span></p>
          <hr />
          <p>Tổng: <span className={style.totalCost}>{parseCurrency(totalPrice + shipping)}đ</span></p>
        </div>
        <NavLink style={{ textDecoration: 'none' }} to='/payment'>
          <RedButtonLg>
            Tiến hành đặt hàng
          <ChevronsRight />
          </RedButtonLg>
        </NavLink>
      </div>
    )
  }
}

export default CartTotal