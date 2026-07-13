import { useState } from "react";
import "./styles/App.css";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import products from "./data/products";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    if (cartItems.includes(product.id)) {
      return;
    }

    setCartItems([...cartItems, product.id]);
    setCartCount(cartCount + 1);
  }

  return (
    <div className="container">
      <h1>🛒 Product Listing Page</h1>

      <Cart cartCount={cartCount} />

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            added={cartItems.includes(product.id)}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;