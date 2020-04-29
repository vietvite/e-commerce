import React from 'react'
import { connect } from 'react-redux'
import { calcCostProductList, parseCurrency } from '../../commons/utils'
import { getBillRequest } from '../../redux/bill/actionCreator'
import Container from '../../components/CombineComponents/Container/Container'
import style from './Bill.module.scss'
// import moment from 'moment'

class Bill extends React.Component {
  componentDidMount() {
    this.props.fetchBill()
  }
  render() {
    const { listBill } = this.props
    return (
      <Container>
        <div className={style.bill}>
          <h2>Danh sách đơn đặt hàng</h2>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Mã đơn</th>
                  <th>Ngày mua</th>
                  <th>Tên sản phẩm</th>
                  <th>Tổng tiền</th>
                  <th>Trạng thái đơn hàng</th>
                </tr>
                {
                  listBill.map(bill => (
                    <tr>
                      <td>{bill.id}</td>
                      <td>{(bill.orderDate)}</td>
                      <td className={style.left}>{bill.listProduct.map(product => (
                        <span>{product.title}</span>
                      ))}</td>
                      <td>{parseCurrency(calcCostProductList(bill.listProduct))}</td>
                      <td>{
                        bill.status === 0
                          ? 'Đang chờ duyệt'
                          : bill.status === 1
                            ? 'Giao hàng thành công'
                            : 'Đã hủy'
                      }</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    )

  }
}

const mapStateToProps = (state) => ({
  listBill: state.bill
})

const mapDispatchToProps = dispatch => ({
  fetchBill: () => dispatch(getBillRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
