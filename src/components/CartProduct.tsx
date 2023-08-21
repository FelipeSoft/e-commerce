import { productFeatures } from "../utils/productFeatures";
import { Count } from "./Count";

type Props = {
    image: string;
    name: string;
    children: React.ReactNode;
}

export const CartProduct = ({ image, name, children }: Props) => {
    return (
        <div className="w-full flex items-center justify-between py-4 px-8">
            <img className="w-20" src={image} alt="" />
            <div>
                <h3>{productFeatures.limitCharacters(name, 30)}</h3>
                { children }
            </div>
            <div className="cursor-pointer">Remover</div>
        </div>
    )
}