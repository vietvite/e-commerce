import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import ListProductByCategory from "./views/ListProductByCategory/ListProductByCategory";
import ProductDetail from "./views/ProductDetail";
import Cart from "./views/Cart/Cart";
import FavoriteList from "./views/FavoriteList/FavoriteList";
import CartOrderLater from "./components/CombineComponents/CartOrderLater/CartOrderLater";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={ListProductByCategory} />
          <Route path="/detail" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorite" component={FavoriteList} />
          <Route path="/orderlater" component={CartOrderLater} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
