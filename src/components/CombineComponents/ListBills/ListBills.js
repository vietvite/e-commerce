import React, { Component } from "react";
import style from "./ListBills.module.scss";
import { NavLink } from "react-router-dom";
import { parseCurrency, calcCostProductList } from "../../../commons";
import { connect } from "react-redux";
import { getPaidBill } from "../../../redux/payment/actionCreator";

class ListBills extends Component {
  componentDidMount() {
    this.props.getPaidBill();
  }
  getDate = (date) => {
    let now = new Date(date);
    return `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
  }
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
            {this.props.listBill.map((bill, index) => {
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? style.grayBackground : ""}
                >
                  <td className={style.alignLeft}>{bill.id}</td>
                  <td className={style.alignCenter}>{this.getDate(bill.orderDate)}</td>
                  <td className={style.alignLeft}>
                    {bill.listProduct.length === 1
                      ? bill.listProduct[0].title
                      : `${bill.listProduct[0].title} và ${
                          bill.listProduct.length - 1
                        } sản phẩm`}
                  </td>
                  <td className={style.alignCenter}>
                    {parseCurrency(calcCostProductList(bill.listProduct || []))}
                    đ
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
const mapStateToProps = (state) => {
  return {
    listBill: state.payment.bill,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPaidBill: () => {
      dispatch(getPaidBill());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListBills);
