import Header from "./components/Header";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <di>
      {/* Begin header */}
      <Header />
      {/* End Header */}
      {/* Begin Main */}
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          {/* Sidebar */}
          <Sidebar />
          {/* Content */}
          <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
              {/* Begin Card */}
              <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                  className="w-full object-cover"
                  src="./assets/movie-1.png"
                  alt=""
                />
                <figcaption className="pt-4">
                  <h3 className="text-xl mb-1">Iron Man</h3>
                  <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                  </p>
                  <div className="flex items-center space-x-1 mb-5">
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </div>
                  <a
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="#"
                  >
                    <img src="./assets/tag.svg" alt="" />
                    <span>$100 | Add to Cart</span>
                  </a>
                </figcaption>
              </figure>
              {/* End Card */}
              {/* Begin Card */}
              <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                  className="w-full object-cover"
                  src="./assets/movie-1.png"
                  alt=""
                />
                <figcaption className="pt-4">
                  <h3 className="text-xl mb-1">Iron Man</h3>
                  <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                  </p>
                  <div className="flex items-center space-x-1 mb-5">
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </div>
                  <a
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="#"
                  >
                    <img src="./assets/tag.svg" alt="" />
                    <span>$100 | Add to Cart</span>
                  </a>
                </figcaption>
              </figure>
              {/* End Card */}
              {/* Begin Card */}
              <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                  className="w-full object-cover"
                  src="./assets/movie-1.png"
                  alt=""
                />
                <figcaption className="pt-4">
                  <h3 className="text-xl mb-1">Iron Man</h3>
                  <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                  </p>
                  <div className="flex items-center space-x-1 mb-5">
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </div>
                  <a
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="#"
                  >
                    <img src="./assets/tag.svg" alt="" />
                    <span>$100 | Add to Cart</span>
                  </a>
                </figcaption>
              </figure>
              {/* End Card */}
              {/* Begin Card */}
              <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                  className="w-full object-cover"
                  src="./assets/movie-1.png"
                  alt=""
                />
                <figcaption className="pt-4">
                  <h3 className="text-xl mb-1">Iron Man</h3>
                  <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                  </p>
                  <div className="flex items-center space-x-1 mb-5">
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </div>
                  <a
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="#"
                  >
                    <img src="./assets/tag.svg" alt="" />
                    <span>$100 | Add to Cart</span>
                  </a>
                </figcaption>
              </figure>
              {/* End Card */}
              {/* Begin Card */}
              <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                  className="w-full object-cover"
                  src="./assets/movie-1.png"
                  alt=""
                />
                <figcaption className="pt-4">
                  <h3 className="text-xl mb-1">Iron Man</h3>
                  <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                  </p>
                  <div className="flex items-center space-x-1 mb-5">
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </div>
                  <a
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="#"
                  >
                    <img src="./assets/tag.svg" alt="" />
                    <span>$100 | Add to Cart</span>
                  </a>
                </figcaption>
              </figure>
              {/* End Card */}
              {/* Begin Card */}
              <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                  className="w-full object-cover"
                  src="./assets/movie-1.png"
                  alt=""
                />
                <figcaption className="pt-4">
                  <h3 className="text-xl mb-1">Iron Man</h3>
                  <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                  </p>
                  <div className="flex items-center space-x-1 mb-5">
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <img
                      src="./assets/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </div>
                  <a
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="#"
                  >
                    <img src="./assets/tag.svg" alt="" />
                    <span>$100 | Add to Cart</span>
                  </a>
                </figcaption>
              </figure>
              {/* End Card */}
            </div>
          </div>
        </div>
      </main>
      {/* End Main */}
      {/* Footer */}
      <footer className="py-6 md:py-8 mt-8">
        <div className="container mx-auto">
          <p className="text-center text-sm text-black/30 dark:text-[#EEEEEE] ">
            Copyright ©2024 | All rights reserved by Learn with Sumit
          </p>
        </div>
      </footer>
    </di>
  );
}

export default App;
