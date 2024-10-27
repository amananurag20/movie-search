import { configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movieSlice";

const appStore = configureStore(
    {
        reducer: {
             movie: moviesReducer,
        },
    }
);

export default appStore;