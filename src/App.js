import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './views/Layout';
import Home from './views/Home'
import ListProductByCategory from './views/ListProductByCategory/ListProductByCategory';
import ProductDetail from './views/ProductDetail';
import Cart from './views/Cart/Cart';
import Logout from './views/Logout';
// import FavoriteItem from './components/CombineComponents/FavoriteItem/FavoriteItem'
import FavoriteList from './views/FavoriteList/FavoriteList'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product' component={ListProductByCategory} />
        <Route path='/detail' component={ProductDetail} />
        <Route path='/cart' component={Cart} />
        <Route path='/logout' component={Logout} />
        <Route path='/favorites' component={FavoriteList} />
      </Switch>
    </Layout>
  )
}

export default App;
