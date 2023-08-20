import { StarRating } from "./StarRating";

export const Product = () => {
    return (
        <div className="w-full bg-gray-100 flex flex-col items-center p-4 rounded-md cursor-pointer">
            <div className="flex items-center justify-between w-full">
                <div className="text-white bg-orange-600 text-xs rounded-md py-0.5 px-2">Indicado</div>
                <div className="text-white bg-black text-xs rounded-md py-0.5 px-2">49%</div>
            </div>
            <img className="w-32 mt-4" src="/logo512.png" alt="" />
            <div className="mt-8">
                <StarRating />
                <h2 className="text-center text-xl">React</h2>
                <h1 className="flex items-center text-center"><p className="line-through text-gray-400 text-sm">$67.00</p><span className="text-md font-bold ml-2">$34.00</span></h1>
            </div>
        </div>  
    )
}