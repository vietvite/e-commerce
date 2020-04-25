import React from "react";
import style from "./Bill.module.scss";
import { parseCurrency } from "../../../commons/index";
class Bill extends React.Component {
  render() {
    return (
      <table className={style.bill} border="1px">
        <thead>
          <tr>
            <th colSpan="5">ID: {this.props.bill.id}</th>
          </tr>
          <tr className={style.grayBackground}>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {this.props.bill.list.map((item, index) => {
            return (
              <tr className={index % 2 === 1 ? style.grayBackground2 : ""}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{parseCurrency(item.price)}đ</td>
                <td>{this.props.bill.listQuantity[index]}</td>
                <td>
                  {parseCurrency(
                    item.price * this.props.bill.listQuantity[index]
                  )}
                  đ
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className={style.total}>
          <tr>
            <td colSpan="5" className={style.total}>
              <span>
                Tổng tiền: {parseCurrency(this.props.bill.totalPrice)}đ
              </span>
              {!this.props.bill.isAccept && <button>Tiếp nhận</button>}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
export default Bill;
