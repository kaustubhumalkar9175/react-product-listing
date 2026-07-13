import "../styles/ProductCard.css";

function ProductCard({
  name,
  price,
  image,
  rating,
  added,
  onAddToCart,
}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>₹{price.toLocaleString()}</p>

      <p>{"⭐".repeat(rating)}</p>

      <button
        className={added ? "added-btn" : ""}
        onClick={onAddToCart}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;