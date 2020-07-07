import React from "react";
import style from "./Bill.module.scss";
import { parseCurrency, calcCostProductList } from "commons";
import { X, Check } from "react-feather";
import {
  acceptPendingBill,
  denyPendingBill,
} from "redux/payment/actionCreator";
import { connect } from "react-redux";

class Bill extends React.Component {
  render() {
    const orderDate = new Date(this.props.bill.orderDate);
    const deliveryDate = new Date(this.props.bill.deliveryDate);
    return (
      <div className={style.bill}>
        <table>
          <colgroup>
            <col width="40%" />
            <col width="20%" />
            <col width="15%" />
            <col width="10%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th colSpan="1">ID: {this.props.bill.id}</th>
              <th colSpan="2">Ngày tạo: {(`${orderDate.getDate()}/${orderDate.getMonth() + 1}/${orderDate.getFullYear()}`)}</th>
              <th colSpan="2">
                Ngày giao hàng: {(`${deliveryDate.getDate()}/${deliveryDate.getMonth() + 1}/${deliveryDate.getFullYear()}`)}
              </th>
            </tr>
            <tr className={style.grayBackground2}>
              <th>Tên sản phẩm</th>
              <th>Loại</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.props.bill.listProduct.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? style.grayBackground : ""}
              >
                <td className={style.alignLeft}>{item.title}</td>
                <td className={style.alignCenter}>{item.category.name}</td>
                <td className={style.alignCenter}>
                  {parseCurrency(item.price)}đ
                </td>
                <td className={style.alignCenter}>
                  {item.quantity}
                </td>
                <td className={style.alignCenter}>
                  {parseCurrency(
                    item.price * item.quantity
                  )}
                  đ
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className={style.alignRight}>
                <span>
                  Tổng tiền: {calcCostProductList(this.props.listProduct || [])}đ
                </span>
                {!this.props.bill.isAccept && (
                  <>
                    <X
                      className={style.x}
                      onClick={() =>
                        this.props.denyPendingBill(this.props.bill.id)
                      }
                    />
                    <Check
                      className={style.check}
                      onClick={() =>
                        this.props.acceptPendingBill(this.props.bill.id)
                      }
                    />
                  </>
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    acceptPendingBill: (billId) => {
      dispatch(acceptPendingBill(billId));
    },
    denyPendingBill: (billId) => {
      dispatch(denyPendingBill(billId));
    },
  };
};

export default connect(null, mapDispatchToProps)(Bill);
