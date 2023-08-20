import { Top } from "./Top";

type Props = {
    children: React.ReactNode;
}

export const ProductList = ({ children }: Props) => {
    return (
        <div className="w-full h-full">
            <Top label="Produtos Indicados" />
            <div className="grid grid-cols-3 gap-4 pt-4 bg-white rounded-br-md rounded-bl-md p-4 shadow-xl ">
                { children }
            </div>
        </div>
    )
}   