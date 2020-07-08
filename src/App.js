import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "views/Home";
import ListProductByCategory from "views/ListProductByCategory/ListProductByCategory";
import ProductDetail from "views/ProductDetail/ProductDetail";
import Cart from "views/Cart/Cart";
import Logout from "views/Logout";
import FavoriteList from "views/FavoriteList/FavoriteList";
import SellerDashBoard from "views/SellerDashboard/SellerDashBoard";
import PageNotFound from "components/PageNotFound/PageNotFound";
import OrderLater from "views/OrderLater/OrderLater";
import Payment from 'views/Payment/Payment'
import Bill from 'views/Bill/Bill'
import ConnectedLayout from "containers/ConnectedLayout";

function App() {
  return (
    <ConnectedLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={ListProductByCategory} />
        <Route path="/detail/:productId" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/shop/:tab" component={SellerDashBoard} />
        <Route path="/payment" component={Payment} />
        <Route path="/customer/bills" component={Bill} />
        <Route path="/customer/favorites" component={FavoriteList} />
        <Route path="/customer/orderlater" component={OrderLater} />
        <Route path="/customer/logout" component={Logout} />
        <Route component={PageNotFound} />
      </Switch>
    </ConnectedLayout>
  );
}

export default App
