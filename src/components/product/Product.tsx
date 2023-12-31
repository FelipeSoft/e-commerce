import { productFeatures } from "../../utils/productFeatures";
import { StarRating } from "../StarRating";

type Props = {
    name: string;
    rating: number;
    price: number;
    discount: number;
    indicated: boolean;
    image: string;
    onClick: () => void;
}

export const Product = ({ name, rating, price, discount, indicated, image, onClick }: Props) => {
    return (
        <div className="w-full bg-gray-300 flex flex-col items-center justify-between p-4 rounded-md cursor-pointer" onClick={onClick}>
            <div className="flex items-center justify-between w-full">
                <div className={`text-white bg-orange-600 text-xs rounded-md py-0.5 px-2 ${indicated ? "opacity-1" : "opacity-0"}`}>Indicado</div>
                {discount !== 0 && <div className="text-white bg-black text-xs rounded-md py-0.5 px-2">{discount * 100}%</div>}
            </div>
            <img className="w-32 mt-4" src={image} alt="" />
            <div className="mt-8 flex flex-col items-center">
                <StarRating stars={rating} />
                <h2 className="text-center text-xl truncate">
                    {name !== undefined && productFeatures.limitCharacters(name, 30)}
                </h2>
                {discount !== 0 && 
                    <h1 className="flex items-center text-center"><p className="line-through text-gray-400 text-sm">$ {price}</p>
                        <span className="text-md font-bold ml-2">R$ {(price - (price * discount)).toFixed(2)}</span>
                    </h1>
                }
                {discount === 0 && 
                    <span className="text-md font-bold ml-2">R$ {price.toFixed(2)}</span>
                }
            </div>
        </div>  
    )
}