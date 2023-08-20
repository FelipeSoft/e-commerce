type Props = { 
    icon: React.ReactNode; 
    color: string;
}

export const ButtonIcon = ({ icon, color }: Props) => {
    return (
        <div className={`flex items-center justify-center mr-3 w-10 h-10 rounded-full absolute ${color} group-hover:w-full transition-all`}>      
            { icon }
        </div>
    )
}