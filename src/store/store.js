import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../authUser/userSlice";

export default configureStore({
    reducer:{
        user: useReducer,
    }
})