import {configureStore} from "@reduxjs/toolkit";

// Import Favourites Reducer
import FavouritesReducer from "./favourites";


export const store = configureStore({
    reducer: {
        favoruiteMeals: FavouritesReducer,
    },
})