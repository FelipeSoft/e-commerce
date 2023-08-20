import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

export const Top = ({ label }: { label: string }) => {
    return(
        <div className="bg-indigo-700 flex items-center justify-between px-4 py-2 rounded-t-md w-full">
            <p className="text-white font-medium">{label}</p>
            <div className="flex items-center gap-2">
                <div className="group bg-white text-black rounded-full h-7 w-7 flex items-center justify-center cursor-pointer hover:bg-black transition-all"><PiCaretLeftBold className="text-black group-hover:text-white"/></div>
                <div className="group bg-white text-black rounded-full h-7 w-7 flex items-center justify-center cursor-pointer hover:bg-black transition-all"><PiCaretRightBold className="text-black group-hover:text-white"/></div>
            </div>
        </div>
    )
}