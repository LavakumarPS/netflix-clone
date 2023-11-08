import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movies);
    if(!movies)return;
   

    return(
        movies.nowPlayingMovies && (
        <div className=" bg-black">
            <div className="-mt-36 relative z-20">
           <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
           <MovieList title={"Top Rated Movies"} movies={movies?.topratedMovies}/>
           <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
           <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
           </div>
        </div>
    )
    )
}
export default SecondaryContainer;