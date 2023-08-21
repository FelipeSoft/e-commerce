import { productFeatures } from "../utils/productFeatures";

type Props = {
    image: string;
    name: string;
    children: React.ReactNode;
    partialPrice: number;
    onClick: () => void;
}

export const CartProduct = ({ image, name, children, onClick, partialPrice }: Props) => {
    return (
        <div className="w-full flex items-center justify-between py-4 px-8">
           <div className="flex items-center">
           <img className="w-20 mr-6" src={image} alt="" />
                <div>
                    <h3 className="mb-2">{productFeatures.limitCharacters(name, 30)}</h3>
                    <div className="flex items-center">
                        { children }
                        <p className="ml-4 text-sm font-bold text-lime-600">R$ { partialPrice.toFixed(2) }</p>
                    </div>
                </div>
           </div>
            <div className="cursor-pointer" onClick={onClick}>Remover</div>
        </div>
    )
}