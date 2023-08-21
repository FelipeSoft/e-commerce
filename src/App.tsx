import { Cart } from "./components/Cart";
import { MasterRoutes } from "./routes/MasterRoutes";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setCartDisable, addCartProduct, updateCartProduct } from "./redux/reducers/CartReducer";
import { CartProduct } from "./components/CartProduct";
import { Count } from "./components/Count";
import { useState } from "react";

const App = () => {
    const cart = useAppSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleDecrement = (currentQuantity: number, id: number) => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            dispatch(updateCartProduct({id, quantity: newQuantity}))
        }
    }

    const handleIncrement = (currentQuantity: number, id: number) => {
        const newQuantity = currentQuantity + 1;
        dispatch(updateCartProduct({id, quantity: newQuantity}));
    }

    const handleDisable = () => {
        dispatch(setCartDisable(!cart.disable));
    };

    return (
        <div className="w-full">
            <Cart onClick={handleDisable} disable={cart.disable}>
                {cart.products.map(element => {
                    return (
                        <CartProduct image={element.image} name={element.name}>
                            <Count 
                                handleDecrement={() => handleDecrement(element.quantity, element.id)} 
                                handleIncrement={() => handleIncrement(element.quantity, element.id)} 
                                count={element.quantity} 
                                legend={false}
                            />
                        </CartProduct>
                    );
                })}
                
            </Cart>
            <MasterRoutes />
        </div>
    )
}

export default App;