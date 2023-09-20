type Props = {
    children: React.ReactNode;
    label: string;
    defaultTextColor: string;
    hoverTextColor: string;
    onClick?: () => void;
}

export const ButtonRoot = ({ children, label, defaultTextColor, hoverTextColor, onClick }: Props) => {
    return (
        <button className="group flex items-center relative" onClick={onClick}>
            { children }
            <p className={`${defaultTextColor} text-sm font-semibold ml-12 z-10 group-hover:${hoverTextColor} pr-4`}>{ label }</p>
        </button>
    )
} 