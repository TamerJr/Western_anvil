import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import DataSliceReducer from "../Features/DataSlice";
import { podcastApi } from "../Features/ApiSlice";
export const  store=configureStore({
    reducer:{

        DataGetingDataSliceReducer,
        [podcastApi.reducerPath]: podcastApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(podcastApi.middleware),
})
setupListeners(store.dispatch)