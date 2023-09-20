import { BsCaretUp } from "react-icons/bs"

type Props = { 
    enable: boolean 
    onClick: () => void;
}

export const ScrollTop = ({ enable, onClick }: Props) => {
    return (
        <div onClick={onClick} className={`${enable && "mt-0"} ${!enable && "-mb-20"} transition-all w-12 h-12 rounded-full fixed bottom-5 right-5 bg-indigo-700 text-white flex items-center justify-center cursor-pointer shadow-md shadow-black`}>
            <BsCaretUp className="text-2xl" />
        </div>
    )
}