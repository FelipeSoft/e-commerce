import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export const MasterAside = () => {
    return (
        <div className="w-1/4 h-full">
            <nav className="flex flex-col border-2 border-gray-150 mb-4">  
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Smartphones</a>
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Desktops</a>
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Notebooks</a>
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Mouses</a>
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Teclados</a>
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Fones de Ouvido</a>
            </nav>
            <div className="bg-indigo-700 text-white flex items-center justify-center h-96 mb-4">
                Imagem
            </div>
            <div>
                <div className="bg-indigo-700 flex items-center justify-between px-4 py-2">
                    <p className="text-white font-medium">Favoritos</p>
                    <div className="flex items-center gap-2">
                        <div className="bg-white text-black rounded-full h-7 w-7 flex items-center justify-center cursor-pointer"><PiCaretLeftBold className="text-black"/></div>
                        <div className="bg-white text-black rounded-full h-7 w-7 flex items-center justify-center cursor-pointer"><PiCaretRightBold className="text-black"/></div>
                    </div>
                </div>
                <div className="border-gray-150 border-b-2 border-r-2 border-l-2 px-4 py-2 flex items-center">
                    <div className="h-10 w-10 bg-indigo-700 text-white mr-4 text-center">
                        ...
                    </div>
                    <div>
                        <h2 className="text-md">Nome do produto</h2>
                        <h3 className="font-medium text-sm">R$ 29.90</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}