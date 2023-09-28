import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskApi from "./api/taskApi";

const customizeMiddleware = getDefaultMiddleware({
    serializableCheck: false,
}).concat(taskApi.middleware)

const stores = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer, //jika banyak api tinggal tambahin ke bawah
    },
    middleware: customizeMiddleware
});

export type RootState = ReturnType<typeof stores.getState>;

export default stores;