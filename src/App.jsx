import { useState } from "react";
import { useSelector } from "react-redux";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">

      <nav className="navbar">
        <h2
          className="logo"
          onClick={() => setPage("home")}
        >
          Paradise Nursery
        </h2>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("plants")}>
            Plants
          </button>

          <button onClick={() => setPage("cart")}>
            Cart ({cartCount})
          </button>
        </div>
      </nav>

      {page === "home" && (
        <section className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <p>
              Bring nature into your home with our beautiful
              collection of houseplants.
            </p>

            <button
              className="get-started"
              onClick={() => setPage("plants")}
            >
              Get Started
            </button>

            <button
              className="about-button"
              onClick={() => setPage("about")}
            >
              About Us
            </button>
          </div>
        </section>
      )}

      {page === "about" && <AboutUs />}

      {page === "plants" && <ProductList />}

      {page === "cart" && <CartItem />}

    </div>
  );
}

export default App;