import React, { Component } from "react";
import style from "./ListBills.module.scss";
import { NavLink } from "react-router-dom";
import { parseCurrency } from "../../../commons";

export default class ListBills extends Component {
  render() {
    return (
      <div className={style.listBill}>
        <table>
          <colgroup>
            <col width="15%" />
            <col width="15%" />
            <col width="40%" />
            <col width="10%" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr className={style.grayBackground2}>
              <th className={style.alignLeft}>Mã đơn hàng</th>
              <th>Ngày mua</th>
              <th className={style.alignLeft}>Sản phẩm</th>
              <th>Tổng tiền</th>
              <th>Trạng thái giao hàng</th>
            </tr>
          </thead>
          <tbody>
            {this.props.bills.map((bill, index) => {
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? style.grayBackground : ""}
                >
                  <td className={style.alignLeft}>
                    <NavLink
                      to={`/shop/bills/detail?id=${bill.id}&index=${index}`}
                    >
                      {bill.id}
                    </NavLink>
                  </td>
                  <td className={style.alignCenter}>{bill.createDate}</td>
                  <td className={style.alignLeft}>
                    {bill.list.length === 1
                      ? bill.list[0].title
                      : `${bill.list[0].title} và ${
                          bill.list.length - 1
                        } sản phẩm`}
                  </td>
                  <td className={style.alignCenter}>
                    {parseCurrency(bill.totalPrice)}đ
                  </td>
                  <td className={style.alignCenter}>
                    {bill.isAccept ? "Đã giao hàng" : "Chưa giao hàng"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
