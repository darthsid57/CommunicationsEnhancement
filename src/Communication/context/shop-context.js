import React from "react";

export default React.createContext({
  products: [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Xbox Controller", price: 9.99 },
    { id: "p3", title: "G502 Mouse", price: 0.99 },
    { id: "p4", title: "HS50 Corsair", price: 2.99 }
  ],
  cart: [],

  addProductToCart: product => {},

  removeProductFromCart: productId => {}
});
