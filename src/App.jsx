import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleGetStarted = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  return (
    <div className="app-container">
      {!showProductList && !showCart && (
        <div className="landing-page">
          <div className="background-image"></div>

          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>

              <div className="divider"></div>

              <p>Where Green Meets Serenity</p>

              <button
                className="get-started-button"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>

            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {showProductList && !showCart && (
        <div className="product-list-container visible">
          <ProductList
            onHomeClick={handleHomeClick}
            onCartClick={handleCartClick}
            totalItems={totalItems}
          />
        </div>
      )}

      {showCart && (
        <div className="cart-container visible">
          <CartItem
            onContinueShopping={handleContinueShopping}
            onHomeClick={handleHomeClick}
            totalItems={totalItems}
          />
        </div>
      )}
    </div>
  );
}

export default App;