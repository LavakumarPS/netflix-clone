import { useState } from "react";
import Header from "./Header";
const Login =()=>{

  const [isSignInForm,setIsSignInForm]=useState(true);
  
  const toggleSignUpForm=()=>{
       setIsSignInForm(!isSignInForm);
  }
    return(
      <div>
        <Header/>
        <div className="absolute">
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bg"></img>
      </div>
        <form className="w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white align-middle rounded-md bg-opacity-80">
          <h1 className="font-bold text-xl p-2 m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm &&
            <input className="m-2 py-2 w-full rounded-md bg-gray-800" type="text" placeholder="Full Name"></input>
          }
          <input className="m-2 py-2 w-full rounded-md bg-gray-800" type="text" placeholder="Email or Phone number"></input>
          <input className="m-2 py-2 w-full rounded-md bg-gray-800" type="text" placeholder="Password"></input>
          {!isSignInForm &&
            <input className="m-2 py-2 w-full rounded-md bg-gray-800" type="text" placeholder="Confirm Password"></input>
          }
          <button className="p-2 m-2 bg-red-700 w-full rounded-md" type="submit">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="p-2 m-4 cursor-pointer" onClick={toggleSignUpForm}>{isSignInForm ? "New to Netflix ? Sign Up" : "Already a user? Sign In"}</p>
        </form>
      </div>
    )
}
export default Login;