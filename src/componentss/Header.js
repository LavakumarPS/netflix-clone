import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = ()=>{
  const dispatch=useDispatch();
 const navigate = useNavigate();
 const user = useSelector((store)=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=>{
        
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName} = user;
        dispatch(addUser({ uid: uid , email: email , displayName: displayName }));
         navigate("/Browse");
      } 
      else 
      {
         dispatch(removeUser());
         navigate("/");
        
      }
    });

    return() => unsubscribe();
},[]);
      
    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    }

    const showGptSearch = useSelector( store => store.gpt.showGptSearch);

    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between"> 
          <img className="w-44"src={LOGO} alt="logo">
          </img>
        { user && (
          <div className="flex p-2">
            {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) =>(
                <option key={lang.identifier} value = {lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
}
            <button className="py-2 px-4 m-2 mx-6 bg-red-700 text-black font-bold rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
            <img className="w-12 h-12" src={USER_LOGO} alt="user-logo"></img>
          <button onClick={handleSignOut} className="text-white border-spacing-2">Sign Out</button>
          </div>
)}
        </div>


        
    )
}
export default Header;