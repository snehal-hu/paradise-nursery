import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <h1>Your Shopping Cart</h1>

        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <p>
            Add some beautiful plants to your cart.
          </p>

          <button
            className="continue-shopping"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Your Shopping Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-details">
                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: ${item.price}
                  </p>

                  <p>
                    Total: ${itemTotal.toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <p>
            Total Items:{" "}
            {cartItems.reduce(
              (total, item) => total + item.quantity,
              0
            )}
          </p>

          <h2>
            Total Amount: ${totalAmount.toFixed(2)}
          </h2>

          <button
            className="checkout-button"
            onClick={() =>
              alert("Checkout is Coming Soon!")
            }
          >
            Checkout
          </button>

          <button
            className="continue-shopping"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartItem;