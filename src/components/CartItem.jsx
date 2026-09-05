import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem({ onContinueShopping }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (cost) => {
    return parseFloat(String(cost).replace("$", ""));
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity * parseCost(item.cost);
    }, 0);
  };

  const calculateTotalCost = (item) => {
    return item.quantity * parseCost(item.cost);
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = () => {
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <h2 style={{ color: "black" }}>
        Total Cart Amount: $
        {calculateTotalAmount().toFixed(2)}
      </h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>

          <button
            className="get-started-button"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div
                className="cart-item"
                key={item.name}
              >
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <div className="cart-item-name">
                    {item.name}
                  </div>

                  <div className="cart-item-cost">
                    {item.cost}
                  </div>

                  <div className="cart-item-quantity">
                    <button
                      className="cart-item-button cart-item-button-dec"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </button>

                    <span className="cart-item-quantity-value">
                      {item.quantity}
                    </span>

                    <button
                      className="cart-item-button cart-item-button-inc"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total">
                    Subtotal: $
                    {calculateTotalCost(item).toFixed(2)}
                  </div>

                  <button
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="total_cart_amount">
            <h2>
              Total: $
              {calculateTotalAmount().toFixed(2)}
            </h2>
          </div>

          <div className="continue_shopping_btn">
            <button
              className="get-started-button"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>

            <br />

            <button
              className="get-started-button1"
              onClick={() => alert("Functionality Coming Soon")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;