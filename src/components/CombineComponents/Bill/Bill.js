import React from "react";
import style from "./Bill.module.scss";
import { parseCurrency } from "../../../commons/index";
import { X, Check } from "react-feather";
class Bill extends React.Component {
  render() {
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
              <th colSpan="2">ID: {this.props.bill.id}</th>
              <th colSpan="3">Ngày tạo: {this.props.bill.createDate}</th>
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
            {this.props.bill.list.map((item, index) => (
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
                  {this.props.bill.listQuantity[index]}
                </td>
                <td className={style.alignCenter}>
                  {parseCurrency(
                    item.price * this.props.bill.listQuantity[index]
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
                  Tổng tiền: {parseCurrency(this.props.bill.totalPrice)}đ
                </span>
                {!this.props.bill.isAccept && (
                  <>
                    <X className={style.x} />
                    <Check className={style.check} />
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
export default Bill;
