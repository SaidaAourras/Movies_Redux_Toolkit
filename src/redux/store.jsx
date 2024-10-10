import MovieReducer from "./MovieReducer";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer:{
        movies : MovieReducer
    }
})