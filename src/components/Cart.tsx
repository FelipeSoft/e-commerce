import { BsArrowLeft } from "react-icons/bs";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { productFeatures } from "../utils/productFeatures";

type Props = {
    children: React.ReactNode;
    disable: boolean;
    onClick: () => void;
}

export const Cart = ({ onClick, disable, children }: Props) => {
    const cart = useAppSelector(state => state.cart);

    return (
        <div className={`h-screen shadow-xl shadow-black bg-white w-1/3 fixed right-0 bottom-0 top-0 z-40 overflow-y-auto transition-all ${disable && "-mr-cart"} ${!disable && "mr-0 mr-"}`}>
            <div className="w-full bg-indigo-700 h-14 px-8 text-white font-medium text-lg flex items-center justify-between cursor-pointer" onClick={onClick}>
                <div className="flex items-center">
                    <BsArrowLeft className="text-3xl text-white cursor-pointer mr-4 "/>
                    <p>Meu Carrinho</p>
                </div>
                <span>R$ {productFeatures.calculateTotalCartPrice(cart.products).toLocaleString("pt-BR", {
                    style: "decimal",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                    })}
                </span>
            </div>
            <div className={`w-full flex flex-col ${ cart.products.length === 0 && "items-center justify-center"} h-cart`}>
                { children }
                { cart.products.length === 0 && <h1 className="text-2xl font-bold">Nenhum item no carrinho... 😢</h1> }
            </div>
        </div>
    )
}