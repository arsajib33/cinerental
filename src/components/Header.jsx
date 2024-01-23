import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shopping_cart from "../assets/shopping-cart.svg";
import { movieCartContext, themeContext } from "../context";
import CartDetails from "./cine/CartDetails";
export default function Header() {
  const [showCart, setShowCart] = useState(false);
  // const { cartData } = useContext(movieCartContext);
  const { state } = useContext(movieCartContext);
  const { darkMode, setDarkMode } = useContext(themeContext);
  const handleShowCart = () => {
    setShowCart(true);
  };
  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width={139} height={26} alt="" />
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width={24} height={24} alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setDarkMode((darkMode) => !darkMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={darkMode ? sun : moon} width={24} height={24} alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => handleShowCart()}
            >
              <img src={shopping_cart} width={24} height={24} alt="" />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
