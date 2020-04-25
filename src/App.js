import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './views/Layout';
import Home from './views/Home'
import ListProductByCategory from './views/ListProductByCategory/ListProductByCategory';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Cart from './views/Cart/Cart';
import Logout from './views/Logout';
import FavoriteList from './views/FavoriteList/FavoriteList'
import SellerDashBoard from './views/SellerDashboard/SellerDashBoard';
import PageNotFound from './components/CombineComponents/PageNotFound/PageNotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product' component={ListProductByCategory} />
        <Route path='/detail/:productId' component={ProductDetail} />
        <Route path='/cart' component={Cart} />
        <Route path='/logout' component={Logout} />
        <Route path='/favorites' component={FavoriteList} />
        <Route path='/shop/:tab' component={SellerDashBoard} />
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  )
}

export default App;
