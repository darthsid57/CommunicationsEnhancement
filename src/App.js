import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Communication from "./Communication/Communication";
import ShopContext from "../src/Communication/context/shop-context";
import LoginPage from "../src/Communication/components/loginPage";
import ViewPageInternal from "../src/Communication/ViewPageInternal";
import { Provider } from "react-redux";
import store from "./Communication/Redux/store";
import { ProtectedRoute } from "./Communication/components/protected.route";

class App extends Component {
  state = {
    products: [
      { id: "p1", title: "Gaming Mouse", price: 29.99 },
      { id: "p2", title: "Xbox Controller", price: 9.99 },
      { id: "p3", title: "G502 Mouse", price: 0.99 },
      { id: "p4", title: "HS50 Corsair", price: 2.99 }
    ],
    cart: []
  };

  addProductToCart = product => {
    console.log("Adding Product to Cart", product);
  };

  removeProductFromCart = productId => {
    console.log("Removing Product from Cart " + productId);
  };

  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Communication} />
              <Route path="/login" component={LoginPage} />
              <ProtectedRoute
                exact
                path="/ViewPageInternal"
                component={ViewPageInternal}
              />
              {/* <Route path="/ViewPageInternal" component={ViewPageInternal} /> */}
              <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

{
  /* <div>
<ShopContext.Provider
  value={{
    products: this.state.products,
    cart: this.state.cart,
    addProductToCart: this.addProductToCart,
    removeProductFromCart: this.removeProductFromCart
  }}
>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Communication} />
      <Route path="/login" component={LoginPage} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  </BrowserRouter>
</ShopContext.Provider>
</div> */
}
