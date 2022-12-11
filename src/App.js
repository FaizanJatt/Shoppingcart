import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Cart from "./components/Cart";
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function getCartItems(items) {
    console.log("getting items");
    setCartItems(items);
  }
  function toggleCart() {
    console.log("opening cart in homepage");
    setIsCartOpen((prev) => !prev);
  }
  return (
    <div className={isCartOpen ? "App block" : "App"}>
      <Header toggleCart={toggleCart} />
      <p className="homepage--get">Iphone 14 Pro Max.</p>
      <p className="homepage--get">Order Yours Today.</p>
      {isCartOpen && (
        <Cart
          getCartItems={getCartItems}
          cartItems={cartItems}
          toggleCart={toggleCart}
        />
      )}
    </div>
  );
}

export default App;
