import { MdOutlineCancel } from "react-icons/md";
import { useAppSelector } from "../redux/hooks/useAppSelector";

type Props = {
    children: React.ReactNode;
    disable: boolean;
    onClick: () => void;
}

export const Cart = ({ onClick, disable, children }: Props) => {
    const cart = useAppSelector(state => state.cart);

    return (
        <div className={`h-screen bg-white w-1/3 fixed top-0 bottom-0 right-0 z-30 overflow-y-auto transition-all ${disable && "-mr-cart"} ${!disable && "mr-0"}`}>
            <div className="w-full bg-indigo-700 h-14 px-8 text-white font-medium text-lg flex items-center cursor-pointer" onClick={onClick}>
                <MdOutlineCancel className="text-3xl text-white cursor-pointer mr-2"/>
                Fechar
            </div>
            <div className={`w-full flex flex-col ${ cart.products.length === 0 && "items-center justify-center"} h-cart`}>
                { children }
                { cart.products.length === 0 && <h1 className="text-2xl font-bold">Nenhum item no carrinho... 😢</h1> }
            </div>
        </div>
    )
}