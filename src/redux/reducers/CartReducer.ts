import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../../types/CartProduct";

interface CartState {
    products: CartProduct[];
    disable: boolean;
}

const initialState: CartState = {
    products: [],
    disable: true
}

export const slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find(element => element.id === id);
            if (product) {
                updateCartProduct({id, quantity: quantity + 1});
            }
        },
        decrement: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find(element => element.id === id);
            if (product) {
                updateCartProduct({id, quantity: quantity - 1});
            }
        },
        addCartProduct: (state, action: PayloadAction<CartProduct>) => {
            state.products.push(action.payload);
        },
        updateCartProduct: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find(element => element.id === id)

            if(product){
                product.quantity = quantity
            }
        },
        removeCartProduct: (state, action) => {
            state.products.filter(element => element.id !== action.payload)
        },
        setCartDisable: (state, action) => {
            state.disable = action.payload;
        }
    }
});

export const { addCartProduct, setCartDisable, removeCartProduct, updateCartProduct, increment, decrement } = slice.actions;
export default slice.reducer;