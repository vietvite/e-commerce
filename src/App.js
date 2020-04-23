import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './views/Layout';
import Home from './views/Home'
import ListProductByCategory from './views/ListProductByCategory/ListProductByCategory';
import ProductDetail from './views/ProductDetail';
import Cart from './views/Cart/Cart';
import FavoriteList from './views/FavoriteList/FavoriteList';
import Logout from './views/Logout';
import PageNotFound from './components/CombineComponents/PageNotFound/PageNotFound'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category' component={ListProductByCategory} />
        <Route path='/detail' component={ProductDetail} />
        <Route path='/cart' component={Cart} />
        <Route path='/favorite' component={FavoriteList} />
        <Route path='/logout' component={Logout} />
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  )
}

export default App;
