import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./pages/shopping-card";
import Cart from "./pages/cart";
import { CartProvider } from "./pages/cartContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
