import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './views/Layout';
import Home from './views/Home'
import ListProductByCategory from './views/ListProductByCategory';
import ProductDetail from './views/ProductDetail';
import PageNotFound from './components/CombineComponents/PageNotFound/PageNotFound'
import Cart from './views/Cart';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/category' component={ListProductByCategory} />
          <Route path='/detail' component={ProductDetail} />
          <Route path='/cart' component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;