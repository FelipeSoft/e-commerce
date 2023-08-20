import { BiPlus } from "react-icons/bi";
import { MdLocationOn, MdMailOutline, MdPhone } from "react-icons/md";

export const MasterFooter = () => {
    return (
        <footer className="bg-white pt-4">
            <nav className="container mx-auto flex items-start gap-16 pt-2 pb-4">
                <div>
                    <h1 className="text-3xl font-semibold">e<span className="text-indigo-700">commerce</span></h1>
                    <p className="mb-8">Somos a nova geração de tecnologia! 🚀</p>

                    <div>
                        <div className="flex items-center mb-4">
                            <MdMailOutline className="text-3xl text-indigo-700 mr-2" />
                            <p className="text-gray-500">felipedecastrolima2@gmail.com</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <MdLocationOn className="text-3xl text-indigo-700 mr-2" />
                            <p className="text-gray-500">Rua Qualquer, 18. Cidade - Estado</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <MdPhone className="text-3xl text-indigo-700 mr-2" />
                            <p className="text-gray-500">+55 (19) 99988-7766</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-start mb-8">   
                        <h1 className="text-xl font-bold mb-4">Newsletters</h1>
                        <div className="flex items-center  h-10 w-max">
                            <input type="text" placeholder="Informe o seu e-mail" className="w-96 h-full bg-gray-100 outline-none rounded-l-md px-4"/>
                            <button className="h-full px-4 bg-indigo-700 text-white rounded-r-md"><BiPlus /></button>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <h1 className="text-lg font-bold mb-4">Conta</h1>
                            <ul>
                                <li className="py-1"><a href="">Carrinho</a></li>
                                <li className="py-1"><a href="">Perfil</a></li>
                                <li className="py-1"><a href="">Configurações</a></li>
                                <li className="py-1"><a href="">Pedidos</a></li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold mb-4">Categorias</h1>
                            <ul>
                                <li className="py-1"><a href="">Smartphones</a></li>
                                <li className="py-1"><a href="">Desktops</a></li>
                                <li className="py-1"><a href="">Notebooks</a></li>
                                <li className="py-1"><a href="">Mouses</a></li>
                                <li className="py-1"><a href="">Teclados</a></li>
                                <li className="py-1"><a href="">Fones de Ouvido</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full text-center bg-indigo-700 text-white py-2">Desenvolvido por CodingPlanck, Todos os direitos reservados.</div>
        </footer>
    )
}