import { productFeatures } from "../utils/productFeatures";

type Props = {
    image: string;
    name: string;
    children: React.ReactNode;
}

export const CartProduct = ({ image, name, children }: Props) => {
    return (
        <div className="w-full flex items-center justify-between py-4 px-8">
           <div className="flex items-center">
           <img className="w-20 mr-6" src={image} alt="" />
                <div>
                    <h3 className="mb-2">{productFeatures.limitCharacters(name, 30)}</h3>
                    { children }
                </div>
           </div>
            <div className="cursor-pointer">Remover</div>
        </div>
    )
}