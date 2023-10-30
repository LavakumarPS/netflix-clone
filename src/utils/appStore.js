import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
const { configureStore } = require("@reduxjs/toolkit");


const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
        },
    }
)

export default appStore;