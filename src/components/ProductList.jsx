import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 18,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b2a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 22,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Monstera",
    price: 30,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 25,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 28,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Pothos",
    price: 16,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594575761-8f3b7f9f6c0f?auto=format&fit=crop&w=600&q=80",
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 20,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Echeveria",
    price: 14,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 17,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "String of Pearls",
    price: 24,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Zebra Haworthia",
    price: 19,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
  },

  // Flowering Plants
  {
    id: 13,
    name: "Orchid",
    price: 35,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "African Violet",
    price: 21,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Anthurium",
    price: 29,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Begonia",
    price: 23,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Geranium",
    price: 20,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Kalanchoe",
    price: 18,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1459156875910-78c36b1e4d9b?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  return (
    <section className="product-page">
      <h1>Our Plants</h1>

      <p className="product-intro">
        Choose from our beautiful collection of plants.
      </p>

      {categories.map((category) => (
        <div className="category-section" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <div className="plant-info">
                    <h3>{plant.name}</h3>

                    <p className="price">
                      ${plant.price}
                    </p>

                    <button
                      className="add-button"
                      onClick={() => dispatch(addToCart(plant))}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;