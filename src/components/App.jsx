import React from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import Catalog from "../pages/Catalog/Catalog";
import Cart from "../pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Redirect to="/catalog" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
