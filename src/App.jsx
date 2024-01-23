import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./components//Page.jsx";
import { movieCartContext, themeContext } from "./context";
import { cartReducer, initialState } from "./reducer/CartReducer.js";
function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <themeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* <movieCartContext.Provider value={{ cartData, setCartData }}> */}
      <movieCartContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer />
      </movieCartContext.Provider>
    </themeContext.Provider>
  );
}

export default App;
