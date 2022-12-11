import Header from "./Header";
import IphoneData from "../products/IphoneData";
import iPadData from "../products/iPaddata";
import MacbookData from "../products/MacbookData";
import { useState } from "react";
import Cart from "./Cart";

function Catalog() {
  const [currentData, setCurrentData] = useState(IphoneData);
  const [productType, setProductType] = useState("iphone");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function setCategory(e) {
    const category = e.target.attributes[0].value;
    setProductType(category);
    if (category === "iphone") {
      setCurrentData(IphoneData);
    } else if (category === "ipad") {
      setCurrentData(iPadData);
    } else if (category === "macbook") {
      setCurrentData(MacbookData);
    }
  }
  function toggleCart() {
    setCartOpen((prev) => !prev);
  }

  function addToCart(e, data) {
    const filtered = cartItems.filter((item) => {
      return item.name === data.name;
    });

    if (filtered.length === 0) {
      data.quantity = 1;
    } else {
      data.quantity = data.quantity + 1;
    }

    setCartItems((prev) => {
      prev.forEach((item) => {
        if (item.quantity < 1) {
          item.quantity = item.quantity + 1;
        }
      });
      return [...prev];
    });

    if (filtered.length !== 0) {
      return;
    }
    setCartItems((prev) => {
      return [...prev, data];
    });
  }

  function NumberOfItems() {
    let arr = [0];
    cartItems.forEach((item) => {
      arr.push(item.quantity);
    });

    const totalQuantity = arr.reduce((total, current) => {
      return total + current;
    });

    return totalQuantity;
  }
  const quantity = NumberOfItems();
  return (
    <div className={cartOpen ? "fade Catalog" : "Catalog"}>
      <Header
        quantity={quantity}
        cartItems={cartItems}
        toggleCart={toggleCart}
        mode={"catalog"}
      />
      <div className="catalog--wrapper">
        <div className="catalog--left">
          <h1>Products</h1>
          <div className="left--nav">
            <div onClick={setCategory} data-attribute="iphone">
              Iphone
              <hr className="hr--hr"></hr>
            </div>
            <div onClick={setCategory} data-attribute="macbook">
              MacBook
              <hr></hr>
            </div>
            <div onClick={setCategory} data-attribute="ipad">
              iPad
              <hr></hr>
            </div>
          </div>
        </div>
        <div className="catalog--right">
          {currentData.map((data, index) => {
            return (
              <div className="products--info" key={index}>
                <p className="product--name">{data.name}</p>
                <div className={`${productType} products--container`}>
                  <img className="product--img" src={data.image} alt={"img"} />
                </div>
                <div className="order">
                  <p className="item---price">${data.price}</p>
                  <button
                    className="add-to-cart"
                    data={data}
                    data-attributes={data}
                    onClick={(e) => {
                      addToCart(e, data);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {cartOpen && <Cart cartItems={cartItems} toggleCart={toggleCart} />}
    </div>
  );
}

export default Catalog;
