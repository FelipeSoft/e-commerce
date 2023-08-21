// Count.tsx
import { BiMinus, BiPlus } from "react-icons/bi";

type Props = {
    count: number;
    legend: boolean;
    handleIncrement: () => void;
    handleDecrement: () => void;
}

export const Count = ({ legend, count, handleIncrement, handleDecrement }: Props) => {
    return (
        <div className="flex items-center">
            {legend && <p className="mr-4">Quantidade</p>}
            <div className="flex items-center gap-2 bg-gray-200 rounded-md text-black">
                <div onClick={handleDecrement} className="w-7 h-7 flex items-center rounded-l-md justify-center cursor-pointer hover:bg-indigo-700 hover:text-white"><BiMinus/></div>
                <div className="w-10 h-7 text-center">{count}</div>
                <div onClick={handleIncrement} className="w-7 h-7 flex items-center rounded-r-md justify-center cursor-pointer hover:bg-indigo-700 hover:text-white"><BiPlus/></div>
            </div>
        </div>
    )
}
