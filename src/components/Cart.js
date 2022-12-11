import { Link } from "react-router-dom";
function Cart({ toggleCart, cartItems, getCartItems }) {
  function closeCart() {
    toggleCart();
  }

  if (getCartItems) {
    getCartItems(cartItems);
  }

  let allItems = cartItems;
  function OrderTotal() {
    if (!cartItems) {
      allItems = [];
    }
    const arr = [0];
    allItems.forEach((item) => {
      arr.push(item.price * item.quantity);
    });

    const reduced = arr.reduce((total, current) => {
      return total + current;
    });

    return reduced;
  }

  const finalValue = OrderTotal();

  return (
    <div className="Cart">
      <div className="enclosure">
        <span onClick={closeCart} className="closeCart">
          <svg
            class="Cart_svgClose__Wzojf"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"></path>
          </svg>
        </span>
        <div className="sec">
          <div>Shopping Bag</div>
          {finalValue <= 0 && (
            <>
              <svg
                className="Cart_svgCart__1IiDg bag-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"></path>
              </svg>
              <p className="cart-empty">Your Cart is empty</p>
            </>
          )}
        </div>
        <div className="cart-items">
          {cartItems &&
            cartItems.map((item) => {
              return (
                <div key={item.name} className="cart-item-container">
                  <img
                    className="cart--item cart--image"
                    alt="product-img"
                    src={item.image}
                  ></img>
                  <div className="cart--item--details">
                    <p className="cart--item cart--name">{item.name}</p>
                    <p className="cart--item cart--price">${item.price}</p>
                    <p className="cart--item cart--quantity">{item.quantity}</p>
                  </div>
                </div>
              );
            })}
          {finalValue > 0 && (
            <>
              <p className="total--cart">Total : ${finalValue}</p>

              <Link className="buy--btn checkout" to={"/"}>
                Checkout
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
