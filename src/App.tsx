import { Cart } from "./components/Cart";
import { MasterRoutes } from "./routes/MasterRoutes";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { decrement, increment, removeCartProduct, setCartDisable, updateCartProduct } from "./redux/reducers/CartReducer";
import { CartProduct } from "./components/CartProduct";
import { Count } from "./components/Count";
import { ScrollTop } from "./components/ScrollTop";
import { useEffect, useState } from "react";

const App = () => {
    const [ enable, setEnable ] = useState(false);

    const cart = useAppSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleDecrement = (currentQuantity: number, id: number) => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            dispatch(decrement({
                id, newQuantity 
            }))
        }
    }

    const handleIncrement = (currentQuantity: number, id: number) => {
        const newQuantity = currentQuantity + 1;
        dispatch(increment({id, currentQuantity}));
    }

    const handleRemove  = (id: number) => {
        dispatch(removeCartProduct({id: id}));
    }

    const handleDisable = () => {
        dispatch(setCartDisable(!cart.disable));
    };

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 150 ? setEnable(true) : setEnable(false);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className="flex">
            <Cart onClick={handleDisable} disable={cart.disable}>
                {cart.products.map(element => {
                    return (
                        <CartProduct partialPrice={
                            element.discountedPrice !== 0
                            ? (element.discountedPrice * element.quantity)
                            : (element.price * element.quantity)} 

                            onClick={() => handleRemove(element.id)} 
                            image={element.image} 
                            name={element.name}>
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
            <ScrollTop enable={enable} onClick={handleScrollTop}/>
        </div>
    )
}

export default App;