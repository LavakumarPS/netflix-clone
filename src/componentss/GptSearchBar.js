import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
       console.log(searchText.current.value);

       const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value +
       " . only give me names of 5 movies, comma separated by the example result given ahead. Example Result: Vikram, Leo, Singam, NGK, Kaithi";
       const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if(!gptResults.choices){

      }

      console.log(gptResults.choices?.[0]?.message?.content);

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const promisedArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promisedArray);
      
      console.log(tmdbResults);

      dispatch(addGptMovieResults({movieNames :gptMovies, movieResults :tmdbResults}));
    }
    
    return(

        <div className="pt-[10%] flex justify-center ">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
               <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}>
               </input>
               <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg " onClick={handleGptSearchClick} >{lang[langKey].search}
               </button>
            </form>
        </div>
        
    )
}

export default GptSearchBar;