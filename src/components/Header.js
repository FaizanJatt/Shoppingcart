import { Link } from "react-router-dom";

function Header({ mode, toggleCart, quantity }) {
  function toggle() {
    toggleCart();
  }
  return (
    <>
      <div className={mode ? "catalog Header" : "Header"}>
        <div
          className={mode ? "catalog-header-left header--left" : "header--left"}
        >
          <Link to={"/"}>Apple Store</Link>
        </div>

        <ul
          className={
            mode ? "catalog-header-right header--right" : "header--right"
          }
        >
          <li>
            <Link to={"/catalog"}>Products</Link>
          </li>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li onClick={toggle}>
            <svg
              className="Header_svgCart__182oV"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"></path>
            </svg>
            <span className="notification---cart">{quantity}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;