import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, USER_LOGO } from "../utils/constants";


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
    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between"> 
          <img className="w-44"src={LOGO} alt="logo">
          </img>
        { user && (
          <div className="flex p-2">
            <img className="w-12 h-12" src={USER_LOGO} alt="user-logo"></img>
          <button onClick={handleSignOut} className="text-white border-spacing-2">Sign Out</button>
          </div>
)}
        </div>


        
    )
}
export default Header;