import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./pages/shopping-card";
import Cart from "./pages/cart";
import { CartProvider } from "./pages/cartContext";
import User from "./pages/user"
import Phone from "./pages/login-phone"
import Email from "./pages/login-email"
import SignUp from "./pages/sign-up";
import Favorites from './pages/fav-page'
import { FavoritesProvider, useFavorites } from './pages/favContext';
function App() {
  return (
    <FavoritesProvider> 
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user" element={<User />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/email" element={<Email />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  </FavoritesProvider>
  );
}

export default App;
