import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { decrement, increment, addCartProduct } from "../../redux/reducers/CartReducer";
import { CartProduct } from "../../types/CartProduct";
import { StarRating } from "../StarRating";
import { productFeatures } from "../../utils/productFeatures";
import { Count } from "../Count";
import { Button } from "../button";
import { BsCartPlus } from "react-icons/bs";
import { Product } from "../../types/Product";

export const ProductView = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(0);
    const { slug } = useParams();
    const cart = useAppSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1); 
            dispatch(decrement(product?.id || 0));
        }
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1); 
        dispatch(increment(product?.id || 0));
    }

    const handleInsert = (product: CartProduct) => {
        dispatch(addCartProduct({
            id: product.id,
            name: product.name,
            image: product.image,
            quantity: quantity, 
        }));
    }   

    useEffect(() => {
        if(slug){
            if(productFeatures.getProductById(parseInt(slug)) !== null){
                setProduct((productFeatures.getProductById(parseInt(slug))))
            }
        }
    }, [slug])

    return (
        <div className="w-full rounded-md flex gap-8 bg-white p-4">
            <div className="text-black w-1/2">
                <img src={product?.image} alt="" />
            </div>
            <div className="flex flex-col items-start justify-center w-1/2">
                <h1 className="text-xl font-semibold w-full mb-4">{product?.name}</h1>
                <StarRating stars={product?.rating ?? 0} />
                <div>
                    {product?.discount !== 0 && product?.discount !== undefined &&
                        <h2 className="my-2 text-2xl flex flex-col items-start"><p className="line-through text-gray-400 text-sm mr-2">R$ {product?.price.toFixed(2)}</p> <span className="font-bold">R$ {(product?.price - (product?.price * product?.discount)).toFixed(2)}</span></h2>
                    }
                    {product?.discount === 0 &&
                        <h2 className="my-2 text-2xl font-bold">R$ {product?.price.toFixed(2)}</h2>
                    }
                </div>
                <p className="text-justify">{product?.description}</p>
                <div className="flex items-center mt-6 gap-4">
                    <Count handleDecrement={handleDecrement} handleIncrement={handleIncrement} count={quantity} legend={true}/>
                    <Button.Root defaultTextColor="text-indigo-700" hoverTextColor="text-white" label="Adicionar ao Carrinho" onClick={
                        () => handleInsert({
                            id: product?.id ?? 0,
                            image: product?.image ?? "",
                            name: product?.name ?? "",
                            quantity: quantity
                        })
                        }>
                        <Button.Icon color="bg-indigo-700" icon={<BsCartPlus className="text-white w-6 h-6 absolute left-0 ml-2"/>} />
                    </Button.Root>
                </div>
            </div>
        </div>
    )
}
