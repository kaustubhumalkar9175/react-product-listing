import "../styles/Cart.css";

function Cart({ cartCount }) {
  return (
    <div className="cart">
      🛒 Cart ({cartCount})
    </div>
  );
}

export default Cart;