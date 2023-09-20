import { Top } from "../Top";

export const MasterAside = () => {
    return (
        <div className="w-1/4 h-full">
            <nav className="flex flex-col mb-8 rounded-md bg-white shadow-xl">  
                <a className="w-full py-2 px-4 rounded-tr-md rounded-tl-md hover:bg-gray-200" href="">Smartphones</a>
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Desktops</a>
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Notebooks</a>
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Mouses</a>
                <a className="w-full py-2 px-4 hover:bg-gray-200" href="">Teclados</a>
                <a className="w-full py-2 px-4 rounded-br-md rounded-bl-md hover:bg-gray-200" href="">Fones de Ouvido</a>
            </nav>
            <div className="bg-indigo-700 text-white flex items-center justify-center h-96 mb-4 rounded-md shadow-xl">
                Imagem
            </div>
            <div>
                <Top label="Favoritos"/>
                <div className="border-gray-150 bg-white px-4 py-2 flex items-center rounded-b-md shadow-xl">
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