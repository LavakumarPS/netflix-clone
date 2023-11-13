import { BACKGROUND_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (

        <div>
            <div className="fixed -z-10">
            <img src={BACKGROUND_IMG} alt="background-img"></img>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
        
    )
}

export default GptSearch;