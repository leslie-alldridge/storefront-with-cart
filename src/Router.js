import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Cart from './pages/cart';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path='/cart' component={Cart}></Route> */}
  </Switch>
);

export default routes;
