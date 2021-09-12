import React from 'react';
import Blusas from '../pages/Blusas';
import Home from '../pages/Home';
import Pantalones from '../pages/Pantalones';
import Vestidos from '../pages/Vestidos';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { NotFound } from '../pages/NotFound';
import { ProductView } from '../pages/ProductView';
import { Cart } from '../pages/Cart';


const App = () => {


  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/blusas" exact component={Blusas} />
          <Route path="/vestidos" exact component={Vestidos} />
          <Route path="/pantalones" exact component={Pantalones} />
          <Route path="/cart" exact component={Cart} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Router>

    </>


  )

}
export default App;