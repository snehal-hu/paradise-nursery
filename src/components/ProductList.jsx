import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    category: "Aromatic Plants",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
    description:
      "A beautiful and easy-to-care-for plant that is perfect for indoor spaces.",
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2e3e?auto=format&fit=crop&w=500&q=80",
    description:
      "A low-maintenance plant known for improving indoor air quality.",
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
    description:
      "An elegant flowering plant that adds beauty to any room.",
  },
  {
    id: 4,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
    description:
      "A popular indoor plant that is easy to grow and maintain.",
  },
  {
    id: 5,
    name: "Lavender",
    category: "Aromatic Plants",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=500&q=80",
    description:
      "A fragrant plant that brings a relaxing aroma to your home.",
  },
  {
    id: 6,
    name: "Basil",
    category: "Medicinal Plants",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=500&q=80",
    description:
      "A useful herb that can be grown indoors and used in cooking.",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const categories = [
    "Air Purifying Plants",
    "Aromatic Plants",
    "Medicinal Plants",
  ];

  return (
    <div className="products-page">
      <h1>Our Plants</h1>

      <p className="products-intro">
        Explore our collection of beautiful plants for your home and office.
      </p>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="plant-category" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p>{plant.description}</p>

                  <p className="price">${plant.price}</p>

                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;