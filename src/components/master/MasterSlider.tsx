import { BiPlus } from "react-icons/bi";
import { Button } from "../button/index";

export const MasterSlider = () => {
    return (
        <div className="p-12 bg-gradient-to-tr from-indigo-500 to-indigo-800 rounded-md shadow-xl">
            <h2 className="text-white font-medium">Somos a nova geração de tecnologia! 🚀</h2>
            <h1 className="text-4xl font-bold pb-2 text-white">Conheça-nos 👇</h1>
            <p className="text-white text-justify pt-4 pb-6">Explore o Futuro da Tecnologia: Descubra nossa ampla seleção de desktops de última geração e periféricos de alto desempenho! De PCs poderosos a acessórios inovadores, estamos aqui para elevar sua experiência tecnológica. Navegue agora e mergulhe no mundo emocionante da eletrônica.</p>
            <Button.Root defaultTextColor="text-white" hoverTextColor="text-white" label="Saiba mais">
                <Button.Icon color="bg-indigo-700" icon={<BiPlus className="text-white w-6 h-6 absolute left-0 ml-2"/>} />
            </Button.Root>
        </div>
    )
} 