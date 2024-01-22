import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";
import { movieCartContext } from "./context";
function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <div>
      <movieCartContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
      </movieCartContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
