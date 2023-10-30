import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateDate } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG } from "../utils/constants";
const Login =()=>{
                                             
  const [isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);
  const dispatch = useDispatch();

  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
     const message=checkValidateDate(email.current.value,password.current.value);
     setErrorMessage(message);

     if(message){return};

     if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: "Lavakumar PS", photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          const {uid,email,displayName,photoURL}=auth.currentUser;
          dispatch(
            addUser({
            uid : uid,
            email: email,
            displayName: displayName,
            photoURL:photoURL,
            })
          );
        }).catch((error) => {
          setErrorMessage(error.message);
        });
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });
     }
     else{
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user!=null){
      console.log(user);
      
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);
  });
     }
  }
  const toggleSignUpForm=()=>{
       setIsSignInForm(!isSignInForm);
  }
    return(
      <div>
        <Header/>
        <div className="absolute">
       <img src={BACKGROUND_IMG} alt="bg"></img>
      </div>
        <form onSubmit={(e)=>e.preventDefault()} className="w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white align-middle rounded-md bg-opacity-80">
          <h1 className="font-bold text-xl p-2 m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm &&
            <input className="m-2 py-2 w-full  bg-gray-800 cursor-text"   type="text" placeholder="Full Name"></input>
          }
          <input className="m-2 py-2 w-full  bg-gray-800 cursor-text focus:ring-red-500" ref={email} type="text" placeholder="Email or Phone number"></input>
          <input className="m-2 py-2 w-full  bg-gray-800 cursor-text" ref={password} type="password" placeholder="Password"></input>
          <p className="text-red-500 font-bold">{errorMessage}</p>
          <button className="p-2 m-2 bg-red-700 w-full rounded-lg" type="submit" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="p-2 m-4 cursor-pointer" onClick={toggleSignUpForm}>{isSignInForm ? "New to Netflix ? Sign Up" : "Already a user? Sign In"}</p>
        </form>
      </div>
    )
}
export default Login;