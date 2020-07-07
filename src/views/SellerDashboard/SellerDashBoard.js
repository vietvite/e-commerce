import React, { Component } from "react";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import { DashBoard } from "./SellerDashBoard.module.scss";
import Container from "../../components/Container/Container";
import ListPendingOrder from "../../components/ListPendingOrder/ListPendingOrder";
import ProductOfShop from "../../components/ProductOfShop/ProductOfShop";
import BillManagement from "../../components/BillManagement/BillManagement";
import styles from './SellerDashBoard.module.scss';
import { Archive, FileText, Clipboard } from "react-feather";

const productIcon = <span className={styles.productIcon}><Archive color='white' strokeWidth='1px' size='1.2rem' /></span>
const pendingOrderIcon = <span className={styles.pendingOrderIcon}><FileText color='white' strokeWidth='1px' size='1.2rem' /></span>
const billIcon = <span className={styles.billIcon}><Clipboard color='white' strokeWidth='1px' size='1.2rem' /></span>

const listDashboardMenu = [
  { icon: productIcon, name: "Sản phẩm đang bán", url: "/shop/product" },
  { icon: pendingOrderIcon, name: "Đơn đặt hàng đang chờ", url: "/shop/order" },
  { icon: billIcon, name: "Đơn hàng đã giao", url: "/shop/bills" },
];
class SellerDashBoard extends Component {
  render() {
    const selectedTab = this.props.match.params.tab;

    const switchTab = (tab) => {
      switch (tab) {
        case "product":
          return <ProductOfShop />;
        case "order":
          return <ListPendingOrder />;
        case "bills":
          return <BillManagement />;
        default:
          return <ProductOfShop />;
      }
    };
    return (
      <Container>
        <div className={DashBoard}>
          <DashboardSidebar
            listDashboardMenu={listDashboardMenu}
            selectTab={this.selectTab}
          />
          {switchTab(selectedTab)}
        </div>
      </Container>
    );
  }
}

export default SellerDashBoard;
