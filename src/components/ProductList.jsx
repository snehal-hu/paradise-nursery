import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Snake Plant",
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae2e3e?auto=format&fit=crop&w=500&q=80",
        description:
          "A beautiful low-maintenance plant that helps purify indoor air.",
        cost: "$20",
      },
      {
        name: "Peace Lily",
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
        description:
          "An elegant indoor plant with beautiful white flowers.",
        cost: "$25",
      },
      {
        name: "Spider Plant",
        image:
          "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
        description:
          "An easy-care plant that is excellent for indoor environments.",
        cost: "$18",
      },
    ],
  },

  {
    category: "Aromatic Fragrant Plants",
    plants: [
      {
        name: "Lavender",
        image:
          "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=500&q=80",
        description:
          "A fragrant plant that provides a calming and relaxing aroma.",
        cost: "$22",
      },
      {
        name: "Aloe Vera",
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
        description:
          "A popular indoor plant that is attractive and easy to maintain.",
        cost: "$15",
      },
      {
        name: "Basil",
        image:
          "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=500&q=80",
        description:
          "An aromatic herb that can be grown indoors and used in cooking.",
        cost: "$12",
      },
    ],
  },

  {
    category: "Medicinal Plants",
    plants: [
      {
        name: "Aloe Medicinal",
        image:
          "https://images.unsplash.com/photo-1596547609652-9cf5d8c8f2d6?auto=format&fit=crop&w=500&q=80",
        description:
          "A useful plant traditionally valued for its medicinal properties.",
        cost: "$18",
      },
      {
        name: "Mint",
        image:
          "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=500&q=80",
        description:
          "A refreshing herb commonly used for its soothing properties.",
        cost: "$14",
      },
      {
        name: "Rosemary",
        image:
          "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80",
        description:
          "An aromatic herb valued for cooking and traditional uses.",
        cost: "$16",
      },
    ],
  },
];

function ProductList({ onHomeClick, onCartClick, totalItems }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    if (!isInCart(plant.name)) {
      dispatch(addItem(plant));
    }
  };

  return (
    <div className="product-page">
      <header className="product-header">
        <button className="home-button" onClick={onHomeClick}>
          Home
        </button>

        <h1>Paradise Nursery</h1>

        <button className="cart-button" onClick={onCartClick}>
          Cart ({totalItems})
        </button>
      </header>

      <div className="product-list">
        {plants.map((category) => (
          <section
            className="plant-category"
            key={category.category}
          >
            <h2 className="category-name">
              {category.category}
            </h2>

            <div className="product-grid">
              {category.plants.map((plant) => {
                const alreadyAdded = isInCart(plant.name);

                return (
                  <div
                    className="product-card"
                    key={plant.name}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />

                    <h3>{plant.name}</h3>

                    <p className="product-description">
                      {plant.description}
                    </p>

                    <p className="product-cost">
                      {plant.cost}
                    </p>

                    <button
                      className={`product-button ${
                        alreadyAdded ? "disabled" : ""
                      }`}
                      disabled={alreadyAdded}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {alreadyAdded
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;