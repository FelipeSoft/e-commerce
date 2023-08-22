import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../../types/CartProduct";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

interface CartState {
    products: CartProduct[];
    disable: boolean;
}

const initialState: CartState = {
    products: [],
    disable: true
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find(element => element.id === id);
            if (product) {
                product.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find(element => element.id === id);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        addCartProduct: (state, action: PayloadAction<CartProduct>) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity; 
            } else {
                state.products.push(action.payload);
            }
        },
        updateCartProduct: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find(element => element.id === id)

            if(product){
                product.quantity += quantity
            }
        },
        removeCartProduct: (state, action) => {
            const { id } = action.payload;
            state.products = state.products.filter(element => element.id !== id)
        },
        setCartDisable: (state, action) => {
            state.disable = action.payload;
        }
    }
});

export const { addCartProduct, setCartDisable, removeCartProduct, updateCartProduct, increment, decrement } = cartSlice.actions;

const persistConfig = {
    key: 'cart',
    storage
}

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);
export default persistedCartReducer;
