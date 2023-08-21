import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducers/CartReducer";
import { persistReducer, persistStore } from "redux-persist";

export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;