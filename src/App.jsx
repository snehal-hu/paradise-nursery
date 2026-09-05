
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
      {/* Navigation Bar */}
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

          <button onClick={() => setPage("about")}>
            About Us
          </button>
        </div>
      </nav>

      {/* Paradise Nursery Landing Page */}
      {page === "home" && (
        <section className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <p>
              Welcome to Paradise Nursery, your online destination
              for beautiful and healthy houseplants.
            </p>

            <p>
              Explore our collection of plants and bring nature
              into your home.
            </p>

            <button
              className="get-started"
              onClick={() => setPage("plants")}
            >
              Get Started
            </button>
          </div>
        </section>
      )}

      {/* About Us Page */}
      {page === "about" && <AboutUs />}

      {/* Product Listing Page */}
      {page === "plants" && <ProductList />}

      {/* Shopping Cart Page */}
      {page === "cart" && <CartItem />}
    </div>
  );
}

export default App;