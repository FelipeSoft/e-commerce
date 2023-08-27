import { BsTelephoneInboundFill } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Search } from "../Search";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setCartDisable } from "../../redux/reducers/CartReducer";
import { parse } from "path";
import { CartProduct } from "../../types/CartProduct";

export const MasterHeader = () => {
    const cart = useAppSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleDisable = () => {
        dispatch(setCartDisable(!cart.disable));
    };
    
    let priceOfCart = cart.products.reduce((total, product) => {
        if (product.discountedPrice !== 0) {
            return total + product.discountedPrice * product.quantity;
        } else {
            return total + product.price * product.quantity;
        } 
    }, 0);
    
    let lengthOfCart = 0;

    return (
        <header>
            <div className="bg-gray-100">
                <div className="container mx-auto py-1">
                    <nav className="w-full flex items-center justify-between">
                        <ul>
                            <li className="inline-block pr-4">
                                <a href="" className="flex items-center"><BsTelephoneInboundFill className="pr-2 text-2xl"/>+55 (19) 99988-7766</a>
                            </li>
                            <li className="inline-block pr-4">
                                <a href="" className="flex items-center"><MdEmail className="pr-2 text-2xl"/>felipedecastrolima2@gmail.com</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="inline-block pl-4"><a href="" className="hover:underline">Ajuda</a></li>
                            <li className="inline-block pl-4"><a href="" className="hover:underline">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="shadow-md bg-white">
                <div className="container mx-auto py-1">
                    <div className="flex items-center justify-between">
                        <a href="/"><h1 className="text-3xl font-semibold">e<span className="text-indigo-700">commerce</span></h1></a>
                        <Search />
                        <nav className="flex items-center">
                            <a href=""><FaRegUser className="text-xl" /></a>
                            <div className="flex items-center ml-8 cursor-pointer" onClick={handleDisable}>
                                <div className="relative flex items-center justify-center" >
                                    <LuShoppingCart className="text-xl" />
                                    <div className="absolute -top-2 -right-2 rounded-full bg-indigo-700 text-white text-xs w-4 h-4 flex items-center justify-center">{ cart.products.map(element => lengthOfCart += element.quantity) ? lengthOfCart : 0 }</div>
                                </div>
                                <div className="flex flex-col items-start ml-6">
                                    <h2 className="text-lg font-semibold">Meu carrinho</h2>
                                    <p className="text-sm text-gray-400 font-medium">R$ {priceOfCart !== 0 ? priceOfCart.toFixed(2) : 0}</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <nav className="pt-4 pb-4">
                        <ul>
                            <li className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400 transition-all inline-block rounded-full py-2 mr-4 bg-indigo-700 text-white"><a className="h-full w-full px-8 py-2" href="">Promoções</a></li>
                            <li className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400 transition-all inline-block rounded-full py-2 mr-4 bg"><a className="h-full w-full px-8 py-2" href="">Tokens & Cashback</a></li>
                            <li className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400 transition-all inline-block rounded-full py-2 mr-4 bg"><a className="h-full w-full px-8 py-2" href="">Produtos</a></li>
                            <li className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400 transition-all inline-block rounded-full py-2 mr-4 bg"><a className="h-full w-full px-8 py-2" href="">Sobre</a></li>
                        </ul> 
                    </nav>
                </div> 
            </div>
        </header>
    )
}