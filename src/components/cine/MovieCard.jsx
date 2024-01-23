/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { movieCartContext } from "../../context";
import { geturl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
export default function MovieCard({ movie }) {
  const [showodal, setShowModal] = useState(false);
  const [seletedMovie, setSelectedMovie] = useState(null);
  // const { cartData, setCartData } = useContext(movieCartContext);
  const { state, dispatch } = useContext(movieCartContext);

  const hadleAddTocart = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();

    const found = state.cartData.find((card) => {
      return card.id === movie.id;
    });
    if (!found) {
      // setCartData([...cartData, movie]);
      dispatch({
        type: "addToCart",
        payload: { ...movie },
      });
      toast.success(`The movie ${movie.title} added successfully.`);
    } else {
      console.log("movie already have in cart");
      toast.error(`The Movie ${movie.title} already added to cart.`);
    }
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  return (
    <>
      {showodal && (
        <MovieDetailsModal
          onAddCart={hadleAddTocart}
          onClose={handleModalClose}
          movie={seletedMovie}
        />
      )}
      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={geturl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => hadleAddTocart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
