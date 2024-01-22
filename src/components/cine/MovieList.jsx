import { getAllMovies } from "../../data/movieList"

import MovieCard from "./Moviecard"
export default function  MovieList(){
const movieList=getAllMovies()
    return(
        <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {/* Begin Card */}
          {
            movieList.map((movie)=>{
               return <MovieCard key={movie.id} movie={movie}/>
            })
          }
       
          {/* End Card */}
    
        </div>
      </div>
    )
}