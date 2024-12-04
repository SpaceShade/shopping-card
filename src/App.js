import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./pages/shopping-card";
import Cart from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
