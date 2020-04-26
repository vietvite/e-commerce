import React, { Component } from 'react'
import DashboardSidebar from '../../components/CombineComponents/DashboardSidebar/DashboardSidebar'
import { DashBoard } from './SellerDashBoard.module.scss'
import Container from '../../components/CombineComponents/Container/Container'
import ProductPageContent from '../../components/CombineComponents/ProductPageContent/ProductPageContent'
import ListPendingOrder from '../../components/CombineComponents/ListPendingOrder/ListPendingOrder'
import ListBills from '../../components/CombineComponents/ListBills/ListBills'

class SellerDashBoard extends Component {
  render() {
    const listDashboardMenu = [
      { icon: undefined, name: 'Sản phẩm đang bán', url: '/shop/product', },
      { icon: undefined, name: 'Đơn đặt hàng', url: '/shop/order' },
      { icon: undefined, name: 'Đơn hàng đã gửi', url: '/shop/bills' },
    ]

    const selectedTab = this.props.match.params.tab

    const switchTab = (tab) => {
      switch (tab) {
        case 'product':
          return <ProductPageContent />
        case 'order':
          return <ListPendingOrder />
        case 'bills':
          return <ListBills />
        default:
          return <ProductPageContent />
      }
    }
    return (
      <Container>
        <div className={DashBoard}>
          <DashboardSidebar
            listDashboardMenu={listDashboardMenu}
            selectTab={this.selectTab} />
          {switchTab(selectedTab)}
        </div>
      </Container>
    )
  }
}

export default SellerDashBoard