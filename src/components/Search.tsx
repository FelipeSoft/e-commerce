import { BiSearchAlt } from "react-icons/bi";

export const Search = () => {
    return (
        <div className="flex items-center">
            <select name="" id="" className="outline-none cursor-pointer">
                <option value="0">Todas as categorias</option>
                <option value="1">Promoções</option>
                <option value="7">Smartphones</option>
                <option value="2">Desktops</option>
                <option value="3">Notebooks</option>
                <option value="4">Mouses</option>
                <option value="5">Teclados</option>
                <option value="6">Fones de Ouvido</option>
                <option value="7">Outros</option>
            </select>
            <div className="flex items-center h-10">
                <div className="flex items-center h-full w-full relative ml-8">
                    <input placeholder="O que você deseja encontrar?" type="text" className="mr-4 h-full bg-gray-100 outline-none rounded-full w-80 px-6 py-1 border-2 border-gray-100 focus:border-2 focus:border-indigo-700"/>
                    <button className="hover:px-8 transition-all absolute right-2 bg-indigo-700 h-full w-10 rounded-full flex items-center justify-center text-white"><BiSearchAlt className="fixed"/></button>
                </div>
            </div>
        </div>
    )
}